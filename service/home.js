import request from './request';
import { homeURL } from '../util/AppConstants';

function getHomeListing() {
  



  return request({ url: homeURL, method: 'GET' });
}



export default {
  getHomeListing,
};
