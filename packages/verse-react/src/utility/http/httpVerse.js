import axios from 'axios';

import { sessionStorage } from 'utility/storage';

export const httpVerse = async params => {
  const { url, method = 'POST', headers = {} } = params;
  console.log(params);
  const reqHeaders = {
    ...headers,
  };
  const urlParams = {
    method,
    headers: reqHeaders,
  };
  if (params.data) {
    urlParams.headers['Content-Type'] = 'application/json';
    urlParams.data = JSON.stringify(params.data);
  }
  let result;
  console.log('\u001b[1;31m URL_PARAMS ::: ', urlParams);
  const cacheKey = `${params.model}${JSON.stringify(params.data)}`;
  console.log('\u001b[1;33m CACHE ::: ', params.cache, params.cacheKey);
  if (params.cache && !params.refreshCache) {
    result = sessionStorage.get(cacheKey, result);
    if (result) {
      console.log('\u001b[1;34m RESPONSE_FROM_CACHE ::: ', result);
      return result;
    }
  }
  result = await fetchData(url, urlParams);
  console.log('\u001b[1;32m RESPONSE ::: ', result);
  if (params.cache) {
    console.log('\u001b[1;36m SETTING_CACHE ::: ', result);
    sessionStorage.set(cacheKey, result);
  }
  return result;
};

const fetchData = async (url, urlParams) => {
  await axios({ url, ...urlParams });
};
