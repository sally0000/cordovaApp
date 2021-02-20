import axios from '../utils/axios' 

export function getFollowMonitorDevice(params) {
    return axios.post('/cloud-admin/emsapp/projectInfo/getFollowMonitorDevice', params);
}

export function getCategoryScreen(params) {
    return axios.get('/cloud-admin/category/getListByKeyword', { params });
}
