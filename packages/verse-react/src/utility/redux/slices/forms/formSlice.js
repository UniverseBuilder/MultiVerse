import { createSlice } from "@reduxjs/toolkit";
import merge from "deepmerge";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    form: null,
  },
  reducers: {
    valueChange: (state, { payload: { model, value } }) => {
      var i,
        obj = {},
        strArr = model.split(".");
      var x = obj;
      for (i = 0; i < strArr.length - 1; i++) {
        x = x[strArr[i]] = {};
      }
      x[strArr[i]] = value;
      return { form: merge(state.form, obj) };
    },
  },
  extraReducers: {},
});

export const { valueChange, resetModel } = formSlice.actions;

export default formSlice.reducer;
