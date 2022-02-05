import axios from 'axios';

export const httpVerse = async params => {
  const {
    url,
    method = 'GET',
    headers = {},
  } = params;
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
  console.log(urlParams);
  const result = await fetchData(url, urlParams);
  return result;
};

const fetchData = async (url, urlParams) => {
  await axios({ url, ...urlParams });
};
