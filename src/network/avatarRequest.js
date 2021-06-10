// 网络请求封装

import axios from 'axios';

export function avatarRequest(config) {
  //1. 创建 axios 的实例
 const instance = axios.create({
   baseURL: 'avatar/',
   timeout: 50000,
   method: 'get'
 })


 //2. axios 的拦截器
 //请求拦截
 instance.interceptors.request.use(config =>{
   return config;
 },err =>{
   console.log(err);
 });

 //响应拦截
 instance.interceptors.response.use(res =>{
   return res.data;
 },err => {
   console.log(err);
 });

 //3.发送真正的网络请求
 return instance(config);

}