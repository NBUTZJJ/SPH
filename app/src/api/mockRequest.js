import axios from "axios";
let requests=axios.create({
    baseURL: '/mock',
    timeout:5000
})

import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 添加请求拦截器
requests.interceptors.request.use(function (config) { 
    nprogress.start()
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
requests.interceptors.response.use(function (response) {
    nprogress.done()
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default requests