import axios from 'axios';

const client = axios.create();

client.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000/api' : 'http://mendoc-stage.ap-northeast-2.elasticbeanstalk.com/api'

client.interceptors.request.use(
  async function (config) {
    if (!config.headers['authorization']) {
      config.headers['authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error)
    return Promise.reject(error);
  }
);

export default client
