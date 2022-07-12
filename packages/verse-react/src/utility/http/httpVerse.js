import axios from 'axios';

import { sessionStorage } from '../storage';

export const httpVerse = async params => {
  const {
    url,
    method = 'POST',
    headers = {},
    onSuccess,
    withCredentials = true,
  } = params;
  const reqHeaders = {
    ...headers,
  };
  const urlParams = {
    method,
    headers: reqHeaders,
    withCredentials,
  };
  if (params.data) {
    urlParams.headers['Content-Type'] = 'application/json';
    urlParams.data = JSON.stringify(params.data);
  }
  let result;
  console.log('\u001b[1;31m URL_PARAMS ::: ', urlParams);
  const cacheKey = `${params.model}`;
  console.log('\u001b[1;33m CACHE ::: ', params.cache, params.cacheKey);
  if (params.cache && !params.refreshCache) {
    result = sessionStorage.get(cacheKey, result);
    if (result) {
      console.log('\u001b[1;34m RESPONSE_FROM_CACHE ::: ', result);
      return result;
    }
  }
  result = await fetchData(url, urlParams);
  if (onSuccess) {
    result = onSuccess(result);
  }
  console.log('\u001b[1;32m RESPONSE ::: ', result);
  if (params.cache) {
    console.log('\u001b[1;36m SETTING_CACHE ::: ', result);
    sessionStorage.set(cacheKey, result);
  }
  return result;
};

const fetchData = async (url, urlParams) => {
  const result = await axios({ url, ...urlParams })
    .then(res => {
      console.log('\u001b[1;32m RESPONSE_FETCH ::: ', res);
      return res;
    })
    .catch(error => {
      console.log('\u001b[1;31m ERROR_FETCH ::: ', error.response);
      throw error.response;
    });
  return result;
};
