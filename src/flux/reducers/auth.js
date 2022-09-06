import { createSlice } from '@reduxjs/toolkit'

export const auth = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    token: null,
    user: null,
    errorMessage: '',
    registered: false
  },
  reducers: {
    logout: state => {
      state.auth = false;
      state.token = null;
      state.user = null;
      state.errorMessage = '';
      state.registered = false;
    },
    loginSucceeded: (state, action) => {
      state.auth = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.errorMessage = '';
      state.registered = false;
    },
    loginFailed: (state, action) => {
      state.auth = false;
      state.token = null;
      state.user = null;
      state.errorMessage = action.payload.errorMessage;
      state.registered = false;
    },
    registerSucceeded: (state, action) => {
      state.auth = false;
      state.token = null;
      state.user = null;
      state.errorMessage = '';
      state.registered = true;
    },
    registerFailed: (state, action) => {
      state.auth = false;
      state.token = null;
      state.user = null;
      state.errorMessage = action.payload.errorMessage;
      state.registered = false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setAuth } = auth.actions

export default auth.reducer