import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import {
  HashRouter,
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
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<App />}>
          <Route
            path="*"
            element={
              <Navigate to="/" />
            }
          />
          <Route index element={<PrivateRoute><MyApps /></PrivateRoute>} />
          <Route path="/apps" exact element={<PrivateRoute><MyApps /></PrivateRoute>} />
          <Route path="/apps/create" exact element={<PrivateRoute><CreateApp /></PrivateRoute>} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);