import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: {
    theme: 'dark',
  },
  reducers: {
    setTheme: (state, action) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
  },
});

export const { getTheme, setTheme } = preferencesSlice.actions;

export const usePreferences = () => {
  const dispatch = useDispatch();
  return {
    ...useSelector(state => state.preferences),
    actions: {
      setTheme: data => dispatch(setTheme(data)),
    },
  };
};

export default preferencesSlice.reducer;
