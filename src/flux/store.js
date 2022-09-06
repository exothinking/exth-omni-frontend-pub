import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/auth';
import appsReducer from './reducers/apps';
import OmniSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    auth: authReducer,
    apps: appsReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(OmniSaga);