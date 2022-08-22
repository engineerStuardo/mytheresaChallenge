import axios from 'axios';
import env from 'react-native-config';

export default axios.create({
  baseURL: `${env.BASE_URL}`,
});
