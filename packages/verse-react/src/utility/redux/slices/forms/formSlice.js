import { createSlice } from '@reduxjs/toolkit';
import merge from 'deepmerge';
import { useDispatch } from 'react-redux';

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
  },
  extraReducers: {},
});

export const { setForm, resetForm } = formSlice.actions;

export const useForm = () => {
  const dispatch = useDispatch();
  return {
    set: data => dispatch(setForm(data)),
    reset: model => dispatch(setForm({ model, value: {} })),
  };
};

export default formSlice.reducer;
