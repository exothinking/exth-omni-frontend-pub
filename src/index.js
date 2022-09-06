import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Register from "./routes/register";
import Login from './routes/login';
import MyApps from './routes/myApps';
import CreateApp from './routes/createApp';
import store from './flux/store';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));

function PrivateRoute({children}) {
  
  const { auth: isAuthenticated } = useSelector(state => state.auth);

  return isAuthenticated 
    ? children
    : <Navigate to="/login" />;
}

root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="*"
            element={
              <Navigate to="/" />
            }
          />
          <Route index element={<PrivateRoute><MyApps /></PrivateRoute>} />
          <Route path="apps" element={<PrivateRoute><MyApps /></PrivateRoute>} />
          <Route path="apps/create" element={<PrivateRoute><CreateApp /></PrivateRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);