import { useApiState } from '../redux/slices/api/apiSlice';
import { sessionStorage } from '../storage';

export const useUser = () => {
  let { login } = useApiState('login');

  if (!login) {
    login = sessionStorage.get('login');
  }

  return login;
};
