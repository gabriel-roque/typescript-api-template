import axios from 'axios';
import api from '@api/version';

export default axios.create({
  baseURL: api.app_url,
});
