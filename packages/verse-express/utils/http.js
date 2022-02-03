const axios = require('axios').default;

const httpVerse = async params => {
  const {
    url,
    method = 'GET',
    requestBody,
    headers = {},
    onSuccess = () => null,
    onError = () => null,
  } = params;
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
  result = await fetchData(url, urlParams, onSuccess, onError);
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

module.exports = {
  httpVerse,
};
