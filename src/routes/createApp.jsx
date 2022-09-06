import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import { Navigate, Link } from 'react-router-dom';

function ErrorLabel({visible, msg}) {
  return visible ?
    <label style={{color: 'red'}}>
      {msg}
    </label>
    : null;
}

export default function CreateApp() {

  const dispatch = useDispatch();
  
  const authState = useSelector(state => state.auth);
  const myAppsState = useSelector(state => state.apps);

  const [appName, setAppName] = useState('');
  const [email, setEmail] = useState(false);
  const [sms, setSms] = useState(false);
  const [webpush, setWebpush] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const submit = () => {
    if(appName) {
      dispatch({type: "apps/createApp", payload: {token: authState.token, appName, email, sms, webpush}});
      setSubmitError(false);
    }
    else { 
      setSubmitError(true);
    }
  }

  useEffect(() => {
    dispatch({type: 'auth/getMyApps', payload: {token: authState.token}});
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Novo App
      </Typography>
      <Divider style={{marginBottom: '30px'}} />
      {myAppsState.created 
        ? <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Alert severity="success">Aplicativo criado com sucesso!</Alert>
          </Grid>
          <Grid item xs={12}>
            <Link to="/apps">
              <Button variant="contained">VER MEUS APPS</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
        : <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField value={appName} onChange={(e) => {setAppName(e.target.value)}} label="Nome do aplicativo" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
              <ErrorLabel msg="Escolha um nome para o app." visible={submitError && !appName} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Habilitar: 
            </Typography>
          </Grid>
          <Grid style={{paddingTop: '0px'}} item xs={12}>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={(e) => setEmail(e.target.checked)} />} label="E-mail" />
              <FormControlLabel control={<Checkbox onChange={(e) => setSms(e.target.checked)} />} label="SMS" />
              <FormControlLabel control={<Checkbox onChange={(e) => setWebpush(e.target.checked)} />} label="Webpush" />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
              <Button onClick={submit} variant="contained">CRIAR APP</Button>
              <ErrorLabel msg={authState.errorMessage} visible={authState.errorMessage} />
          </Grid>
        </Grid>
      }
    </div>
  );
}