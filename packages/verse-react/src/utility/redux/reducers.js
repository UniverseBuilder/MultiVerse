import apiReducer from './slices/api/apiSlice';
import formsReducer from './slices/forms/formSlice';
import preferencesReducer from './slices/preferences/preferencesSlice';

const reducers = {
  api: apiReducer,
  form: formsReducer,
  preferences: preferencesReducer,
};

export default reducers;
