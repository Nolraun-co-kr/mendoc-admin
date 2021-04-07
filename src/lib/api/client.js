import axios from 'axios';
import {loadItem} from "../storage";

const client = axios.create()

client.defaults.headers.authorization = `bearer ${loadItem('access_token')}`;
client.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : ''

export default client
