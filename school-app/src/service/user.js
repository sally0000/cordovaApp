import axios from '../utils/axios' 
// import qs from 'qs'

export function getUserInfo() {
  return axios.get('/cloud-admin/user/info');
}

export function getUserNumInfo(params) {
  return axios.post('/cloud-admin/emsapp/projectInfo/getProjectDeviceTypeCount', params);
} 

export function login(params) {
  // return axios.post('/cloud-admin/user/login', qs.stringify(params));
  return axios.post('/cloud-admin/user/login', params);
}

export function logout() {
  return axios.post('/cloud-admin/user/logout')
}

export function register(params) { 
  return axios.post('/cloud-admin/user/password', params);
}

