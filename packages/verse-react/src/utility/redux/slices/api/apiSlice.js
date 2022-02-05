import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { httpVerse } from '../../../http/httpVerse';

export const apiCall = createAsyncThunk('api/apiCall', async args => {
  console.log('I AM IN API CALL')
  const res = await httpVerse({
    ...args,
  })
    .then(res => {
      return { data: res };
    })
    .catch(err => {
      return {
        data: err,
      };
    });
  return {
    data: res,
  };
});

export const apiSlice = createSlice({
  name: 'api',
  initialState: {},
  reducers: {},
  extraReducers: {
    [apiCall.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    },
    [apiCall.pending]: state => {
      return { ...state, loading: true, error: {} };
    },
    [apiCall.rejected]: (state, action) => {
      return {
        ...state,
        message: '',
        error: action.error,
        loading: false,
      };
    },
  },
});

export const { setResponse } = apiSlice.actions;

export const useApiCall = () => {
  const dispatch = useDispatch();
  return {
    apiCall: data => dispatch(apiCall(data)),
  };
};

export default apiSlice.reducer;
