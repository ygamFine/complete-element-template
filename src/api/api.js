/***
 *
 * 	creationTime: 2018-10-26
 *  author: ZhangYun - ygamfine
 *
 */

import axios from 'axios';
let qs = require('qs');
// 设置 axios 请求体类型 (防止中文乱码)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';


let serverURL = 'http://zhcl.jnaw.top/canlian';

// 登录
export const signInInt = params => {
  return axios.post(`${serverURL}/user/getUserInfo`,qs.stringify(params))
    .then(res => res.data)
    .catch(res => res.data);
}


