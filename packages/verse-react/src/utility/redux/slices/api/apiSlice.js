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
  initialState: {
    api: {},
  },
  reducers: {},
  extraReducers: {
    [apiCall.fulfilled]: (state, action) => {
      return {
        ...state,
        ...{
          [action.meta.arg.model]: {
            payload: action.payload,
            loading: false,
            error: {},
          },
        },
      };
    },
    [apiCall.pending]: (state, action) => {
      return {
        ...state,
        ...{
          [action.meta.arg.model]: {
            loading: true,
            error: {},
          },
        },
      };
    },
    [apiCall.rejected]: (state, action) => {
      return {
        ...state,
        ...{
          [action.meta.arg.model]: {
            loading: false,
            error: action.error,
          },
        },
      };
    },
  },
});

export const { setResponse } = apiSlice.actions;

export const useApi = model => {
  console.log(model);
  const dispatch = useDispatch();
  return {
    [model]: useSelector(state => state.api),
    [`${model}Call`]: data => dispatch(apiCall({ ...data, model })),
  };
};

export default apiSlice.reducer;
