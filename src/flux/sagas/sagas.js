import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { auth, register } from '../../services/authServices';
import { getMyApps, createNewApp, setChannel } from '../../services/appsServices';
import { setAuthToken, clearAuthToken } from '../../services/storageService';

function* login(action) {
   try {
      const { login, password } = action.payload;
      const authResponse = yield call(auth, login, password);
      if(!authResponse.error) {
         setAuthToken(authResponse.token);
         yield put({type: "auth/loginSucceeded", payload: authResponse});
      }
      else {
         clearAuthToken();
         yield put({type: "auth/loginFailed", payload: {errorMessage: authResponse.error}});
      }
   }
   catch (e) {
      clearAuthToken();
      yield put({type: "auth/loginFailed", payload: {errorMessage: e.message}});
   }
}

function* createAccount(action) {
   try {
      const { name, email, companyName, phone, adress, password } = action.payload;
      const registerResponse = yield call(register, name, email, companyName, phone, adress, password);
      if(!registerResponse.error) {
         yield put({type: "auth/registerSucceeded", payload: registerResponse});
      }
      else {
         yield put({type: "auth/registerFailed", payload: {errorMessage: registerResponse.error}});
      }
   }
   catch (e) {
      yield put({type: "auth/registerFailed", payload: {errorMessage: e.message}});
   }
}

function* getApps(action) {
   try {
      const getMyAppsResponse = yield call(getMyApps, action.payload.token);
      if(!getMyAppsResponse.error) {
         yield put({type: "apps/getAppsSucceeded", payload: {list: getMyAppsResponse}});
      }
      else {
         yield put({type: "apps/getAppsFailed", payload: {errorMessage: getMyAppsResponse.error}});
      }
   }
   catch (e) {
      yield put({type: "apps/getAppsFailed", payload: {errorMessage: e.message}});
   }
}

function* createApp(action) {
   try {
      
      const createAppResponse = yield call(
         createNewApp, action.payload.token, action.payload.appName
      );

      if(!createAppResponse.error) {

         // using some fake app id
         const id = 1;

         // use this on production
         // const id = createAppResponse.app_id;

         // Settings for the brand new app
         if(action.payload.email) {
            const email = yield call(
               setChannel, action.payload.token, 'emails', id
            );
         }

         if(action.payload.sms) {
            const sms = yield call(
               setChannel, action.payload.token, 'sms', id
            );
         }

         if(action.payload.webpush) {
            const webpush = yield call(
               setChannel, action.payload.token, 'webpushes', id
            );
         }

         yield put({type: "apps/createAppSucceeded"});
      }
      else {
         yield put({type: "apps/createAppFailed", payload: {errorMessage: createAppResponse.error}});
      }
   }
   catch (e) {
      yield put({type: "apps/createAppFailed", payload: {errorMessage: e.message}});
   }
}

function* OmniSaga() {
   yield takeLatest("auth/login", login);
   yield takeLatest("auth/register", createAccount);
   yield takeLatest("auth/getMyApps", getApps);
   yield takeLatest("apps/createApp", createApp);
}

export default OmniSaga;