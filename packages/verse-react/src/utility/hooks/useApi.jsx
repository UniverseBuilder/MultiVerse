import { useMemo } from 'react';

import { useSelector } from 'react-redux';

import { byString } from '../functions';

export function useApi(model) {
  const { api } = useSelector(state => state.api);
  const value = useMemo(() => byString(api, model), [model, api]);
  return value;
}
