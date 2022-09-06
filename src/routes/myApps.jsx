import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppCard from '../components/AppCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

export default function MyApps() {

  const dispatch = useDispatch();
  
  const authState = useSelector(state => state.auth);
  const myAppsState = useSelector(state => state.apps);

  useEffect(() => {
    dispatch({type: 'auth/getMyApps', payload: {token: authState.token}});
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Meus aplicativos
      </Typography>
      <Divider style={{marginBottom: '30px'}} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Link to="/apps/create">
            <Button variant="contained">NOVO</Button>
          </Link>
        </Grid>
        {myAppsState.list.map(item => 
          <Grid key={item.app_token} item xs={12} md={4}>
            <AppCard {...item}></AppCard>
          </Grid>
        )}
      </Grid>
    </div>
  );
}