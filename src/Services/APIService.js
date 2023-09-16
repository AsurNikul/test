import axios from 'axios';
import {BASE_URL} from '../constants';

export const getCall = point => {
  return axios({
    method: 'GET',
    url: BASE_URL,
  });
};

export const MainData = () => {
  return getCall();
};
