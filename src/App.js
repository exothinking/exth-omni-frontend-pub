import "./style/App.css";
import { Outlet, Link } from "react-router-dom";
import AppBar from './components/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar />
      <Container style={{ marginTop: '30px', marginBottom: '100px'}}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
