import { createSlice } from '@reduxjs/toolkit';
import merge from 'deepmerge';
import { useDispatch } from 'react-redux';

import { byString } from '../../../functions';

const overWriteMerge = (target, source) => {
  const destination = target.slice();
  source.forEach(item => {
    const destinationIndex = destination.indexOf(item);
    if (target.indexOf(item) !== -1) {
      destination.splice(destinationIndex, 1);
    } else {
      destination.push(item);
    }
  });
  return destination;
};

function mergeAssign(target, source) {
  const formData = { ...target };
  const isObject = obj => obj && typeof obj === 'object';

  if (!isObject(formData) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach(key => {
    const targetValue = formData[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      formData[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      formData[key] = { ...targetValue, ...sourceValue };
    } else {
      formData[key] = sourceValue;
    }
  });

  return formData;
}
export const formSlice = createSlice({
  name: 'form',
  initialState: {
    form: null,
  },
  reducers: {
    setForm: (state, { payload: { model, value, overWrite } }) => {
      var i,
        obj = {},
        strArr = model.split('.');
      var x = obj;
      for (i = 0; i < strArr.length - 1; i++) {
        x = x[strArr[i]] = {};
      }
      x[strArr[i]] = value;
      if (overWrite) {
        return { form: merge(state.form, obj, { arrayMerge: overWriteMerge }) };
      }
      return { form: merge(state.form, obj) };
    },
    assignForm: (state, { payload: { model, value } }) => {
      var i,
        obj = {},
        strArr = model.split('.');
      var x = obj;
      for (i = 0; i < strArr.length - 1; i++) {
        x = x[strArr[i]] = {};
      }
      x[strArr[i]] = value;
      return { form: mergeAssign(state.form, obj) };
    },
    resetForm: (state, { payload: model }) => {
      var i,
        obj = {},
        strArr = model.split('.');
      var x = obj;
      for (i = 0; i < strArr.length - 1; i++) {
        x = x[strArr[i]] = {};
      }
      const newObj = Object.keys(byString(state.form, model)).reduce(
        (accumulator, key) => {
          return { ...accumulator, [key]: '' };
        },
        {}
      );
      x[strArr[i]] = newObj;
      return { form: merge(state.form, obj) };
    },
  },
  extraReducers: {},
});

export const { setForm, assignForm, resetForm } = formSlice.actions;

export const useForm = () => {
  const dispatch = useDispatch();
  return {
    set: data => dispatch(setForm(data)),
    assign: data => dispatch(assignForm(data)),
    reset: model => dispatch(resetForm(model)),
  };
};

export default formSlice.reducer;
