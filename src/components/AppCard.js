import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.app_name}
        </Typography>
        <div>
          Email {" "}
          {
            props.active_channels.email.status
              ? <Chip style={{height: "17px", fontSize: "12px"}} label="ativo" size="small" color="success" />
              : <Chip style={{height: "17px", fontSize: "12px"}} label="desativado" size="small" />
          }
        </div>
        <div>
          SMS {" "}
          {
            props.active_channels.sms.status
              ? <Chip style={{height: "17px", fontSize: "12px"}} label="ativo" size="small" color="success" />
              : <Chip style={{height: "17px", fontSize: "12px"}} label="desativado" size="small" />
          }
        </div>
        <div>
          Webpush {" "}
          {
            props.active_channels.webpush.status
              ? <Chip style={{height: "17px", fontSize: "12px"}} label="ativo" size="small" color="success" />
              : <Chip style={{height: "17px", fontSize: "12px"}} label="desativado" size="small" />
          }
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">CONFIGURAR</Button>
      </CardActions>
    </Card>
  );
}
