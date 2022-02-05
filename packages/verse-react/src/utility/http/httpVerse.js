import { axios } from 'axios';

export const httpVerse = async params => {
  const {
    url,
    method = 'GET',
    headers = {},
    onSuccess = () => null,
    onError = () => null,
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
  const result = await fetchData(url, urlParams, onSuccess, onError);
  return result;
};

const fetchData = async (url, urlParams, onSuccess, onError) => {
  await axios({ url, ...urlParams })
    .then(async res => {
      console.log('RESPONSE:::::', res);
      onSuccess(res);
    })
    .catch(error => {
      console.log('ERROR:::::', error);
      onError(error);
    });
};
