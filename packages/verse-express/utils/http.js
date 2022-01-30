const axios = require('axios').default;

const http = async params => {
  const {
    url,
    route,
    queryParams = [],
    pathParams = [],
    method = 'GET',
    requestBody,
    replacers = [],
    reqHeaders = {},
  } = params;
  const headers = {
    Accept: '*',
    ...reqHeaders,
  };
  const urlParams = {
    method,
    headers,
  };
  if (requestBody) {
    urlParams.data = JSON.stringify(requestBody);
    urlParams.headers['Content-Type'] = '*';
  }
  result = await fetchData(apiPath, urlParams, apiBase);
  return result;
};

const fetchData = async (apiPath, urlParams, apiBase) => {
  const response = await axios({ url: apiPath, ...urlParams })
    .then(async res => {
      console.log('RESPONSE:::::', res);
      return {
        data: res,
      };
    })
    .catch(err => {
      console.log('ERROR:::::', err);
      return err;
    });
  return response;
};

module.exports = {
  http,
};
