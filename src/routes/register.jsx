import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';

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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [password, setPassword] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const submit = () => {
    if(name && email && password) {
      dispatch({type: "auth/register", payload: {name, email, companyName, phone, adress, password}});
      setSubmitError(false);
    }
    else { 
      setSubmitError(true);
    }
  }

  return authState.auth ? <Navigate to="/" /> : (
    authState.registered 
      ? <Box sx={{ flexGrow: 1 }} id="login-form">
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Alert severity="success">Cadastro realizado com sucesso!</Alert>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Link to="/login">
              <Button style={{ width: '100%' }} variant="contained">VÁ PARA O LOGIN</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
      : 
      <Box sx={{ flexGrow: 1 }} id="login-form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Preencha o formulário
              </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField value={name} onChange={(e) => {setName(e.target.value)}} style={{width: '100%'}} label="Nome" variant="outlined" />
                <ErrorLabel msg="Digite seu nome." visible={submitError && !name} />
            </Grid>
            <Grid item xs={12}>
                <TextField value={email} onChange={(e) => {setEmail(e.target.value)}} style={{width: '100%'}} label="E-mail" variant="outlined" />
                <ErrorLabel msg="Escolha seu e-mail." visible={submitError && !email} />
            </Grid>
            <Grid item xs={12}>
                <TextField value={companyName} onChange={(e) => {setCompanyName(e.target.value)}} style={{width: '100%'}} label="Nome da empresa (opcional)" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField value={phone} onChange={(e) => {setPhone(e.target.value)}} style={{width: '100%'}} label="Telefone (opcional)" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField value={adress} onChange={(e) => {setAdress(e.target.value)}} style={{width: '100%'}} label="Endereço (opcional)" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField value={password} onChange={(e) => {setPassword(e.target.value)}} style={{width: '100%'}} label="Senha" variant="outlined" type={'password'} />
                <ErrorLabel msg="Escolha uma senha." visible={submitError && !password} />
            </Grid>
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <Button onClick={submit} style={{width: '100%'}} variant="contained">ENVIAR CADASTRO</Button>
                <ErrorLabel msg={authState.errorMessage} visible={authState.errorMessage} />
            </Grid>
          </Grid>
      </Box>
  );
}