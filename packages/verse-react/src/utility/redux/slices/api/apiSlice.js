import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { httpVerse } from '../../../http/httpVerse';

export const apiCall = createAsyncThunk('api/apiCall', async args => {
  const result = await httpVerse({
    ...args,
  })
    .then(res => {
      console.log('\u001b[1;34m SUCCESS_SLICE ::: ', res.data);
      return res.data;
    })
    .catch(err => {
      console.log('\u001b[1;36m ERROR_SLICE ::: ', err);
      throw err;
    });
  return result;
});

export const apiSlice = createSlice({
  name: 'api',
  initialState: {},
  reducers: {},
  extraReducers: {
    [apiCall.fulfilled]: (state, action) => {
      return {
        ...state,
        ...{
          [action.meta.arg.model]: {
            [action.meta.arg.model]: action.payload,
            error: {},
            loading: false,
          },
        },
      };
    },
    [apiCall.pending]: (state, action) => {
      return {
        ...state,
        ...{
          [action.meta.arg.model]: {
            [action.meta.arg.model]: {},
            error: {},
            loading: true,
          },
        },
      };
    },
    [apiCall.rejected]: (state, action) => {
      return {
        ...state,
        ...{
          [action.meta.arg.model]: {
            [action.meta.arg.model]: {},
            error: action,
            loading: false,
          },
        },
      };
    },
  },
});

export const { setResponse } = apiSlice.actions;

export const useApi = model => {
  const dispatch = useDispatch();
  return data => dispatch(apiCall({ ...data, model }));
};

export const useApiState = model => {
  return useSelector(state => state.api?.[model] || {});
};

export default apiSlice.reducer;
