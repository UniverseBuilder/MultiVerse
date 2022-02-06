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
  console.log(params);
  if (params.data) {
    urlParams.headers['Content-Type'] = 'application/json';
    urlParams.data = JSON.stringify(params.data);
  }
  let result;
  console.log(urlParams);
  const cacheKey = `${params.model}${JSON.stringify(params.data)}`;
  if (params.cache && !params.refreshCache) {
    result = sessionStorage.get(cacheKey, result);
    if (result) {
      return result;
    }
  }
  result = await fetchData(url, urlParams);
  if (params.cache) {
    sessionStorage.set(cacheKey, result);
  }
  return result;
};

const fetchData = async (url, urlParams) => {
  await axios({ url, ...urlParams });
};
