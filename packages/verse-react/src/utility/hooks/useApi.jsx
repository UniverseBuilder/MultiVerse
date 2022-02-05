import { useMemo } from 'react';

import { useSelector } from 'react-redux';

export function useApi(model) {
  const { api } = useSelector(state => state.api);
  const value = useMemo(() => api[model], [model, api]);
  return value;
}
