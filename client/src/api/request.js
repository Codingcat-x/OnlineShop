// 对于 axios 进行二次封装
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 使用 axios 对象的方法 create 创建一个 axios 实例

const requests = axios.create({
  // 配置对象
  // 基础路径
  baseURL: '/api',
  timeout: 5000,    // 请求超时时间
})

// 请求拦截器
requests.interceptors.request.use((config) => {
  // config 配置对象
  nprogress.start();
  return config;
})

// 响应拦截器
requests.interceptors.response.use((res) => {
  nprogress.done();
  return res.data;
}, (err) => {
  return Promise.reject(new Error('faile'));
})

export default requests;