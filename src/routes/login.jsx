import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Spinner from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { getAuthToken, clearAuthToken } from '../services/storageService';

function ErrorLabel({visible, msg}) {
  return visible ?
    <label style={{color: 'red'}}>
      {msg}
    </label>
    : null;
}

export default function Login() {

  const dispatch = useDispatch();

  const authState = useSelector(state => state.auth);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(true);

  const submit = () => {
    if(login && password) {
      dispatch({type: "auth/login", payload: {login,password}});
      setSubmitError(false);
    }
    else { 
      setSubmitError(true);
    }
  }

  useEffect(() => {
    if(!authState.auth) {
      const storedToken = getAuthToken();
      if(storedToken.token && storedToken.createdOn > (Date.now() - (3600 * 1000 * 24))) {
        // token still valid
        dispatch({type: "auth/loginSucceeded", payload:{token: storedToken.token, user: null}});
      }
      else {
        clearAuthToken();
        setLoading(false);
      }
    }
  }, []);


  return authState.auth ? <Navigate to="/" /> : (
    <Box sx={{ flexGrow: 1 }} id="login-form">
      {
        loading
          ? <Spinner style={{margin: 'auto'}} />
          :

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Bem-vindo!
            </Typography>
          </Grid>
          <Grid item xs={12}>
              <TextField value={login} onChange={(e) => {setLogin(e.target.value)}} style={{width: '100%'}} label="Login" variant="outlined" />
              <ErrorLabel msg="Digite seu login." visible={submitError && !login} />
          </Grid>
          <Grid item xs={12}>
              <TextField value={password} onChange={(e) => {setPassword(e.target.value)}} style={{width: '100%'}} label="Senha" variant="outlined" type={'password'} />
              <ErrorLabel msg="Digite sua senha." visible={submitError && !password} />
          </Grid>
          <Grid item xs={12} style={{textAlign: 'center'}}>
              <Button onClick={submit} style={{width: '100%'}} variant="contained">ENTRAR</Button>
              <ErrorLabel msg={authState.errorMessage} visible={authState.errorMessage} />
          </Grid>
          
          <Grid item xs={12} style={{textAlign: 'center'}}>
            <Link to="/register">
              <Button style={{width: '100%'}} variant="contained">CADASTRAR-SE</Button>
            </Link>
          </Grid>
        </Grid>
      }
    </Box>
  );
}