import formsReducer from './slices/forms/formSlice';
import preferencesReducer from './slices/preferences/preferencesSlice';

const reducers = {
  preferences: preferencesReducer,
  form: formsReducer,
};

export default reducers;
