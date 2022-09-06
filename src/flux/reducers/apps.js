import { createSlice } from '@reduxjs/toolkit'

export const apps = createSlice({
  name: 'apps',
  initialState: {
    list: [],
    errorMessage: '',
    created: false
  },
  reducers: {
    getAppsSucceeded: (state, action) => {
      state.list = action.payload.list;
      state.errorMessage = '';
      state.created = false;
    },
    getAppsFailed: (state, action) => {
      state.list = [];
      state.errorMessage = action.payload.errorMessage;
      state.created = false;
    },
    createAppSucceeded: (state, action) => {
      state.errorMessage = '';
      state.created = true;
    },
    createAppFailed: (state, action) => {
      state.errorMessage = action.payload.errorMessage;
      state.created = false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { getAppsSucceeded, getAppsFailed } = apps.actions;

export default apps.reducer;