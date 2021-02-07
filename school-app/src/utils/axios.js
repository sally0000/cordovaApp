import axios from 'axios'
import { Toast } from 'vant'
import router from '../router' 

axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.errcode != 0) {//不成功
    if (res.data.message) Toast.fail(res.data.message) 
    //如果拿到的errcode是401，就跳转到login画面
    if (res.data.errcode == 401) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }

  return res.data
})
 

export default axios
