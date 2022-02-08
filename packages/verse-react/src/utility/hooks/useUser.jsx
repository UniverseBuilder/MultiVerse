import { useApiState } from '../redux/slices/api/apiSlice';

export const useUser = () => {
  let { login } = useApiState('login');

  if (!login) {
    login = sessionStorage.get('login');
  }

  return login;
};
