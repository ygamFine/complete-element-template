/***
 *
 * 	creationTime: 2018-08-27
 *  author: ZhangYun - ygamfine
 *
*/
import Vue from 'vue'
let self = Vue.prototype;


/***
 *
 *  judgment
 *  0: 成功   1: 警告		2:错误
 */
let judgment = function(type){
  let types;
  switch(type){
    case 1:
      types = 'warning';
      break;
    case 2:
      types = 'error';
      break;
    default:
      types = 'success';
  }
  return types;
}

/***
 * alert
 *  text: 向用户展示的语句
 *  type: message的类型  0,1,2  不传默认 0
 *  0: 成功   1: 警告		2:错误
 */
export const alert = (text,type,callback) => {
  self.$alert(text, '提示', {
    confirmButtonText: '确定',
    type: judgment(type),
    callback: callback
  });
}
/***
 * message
 *  text: 向用户展示的语句
 */
export const message = (text,type) => {
  self.$message({
    message: text,
    type: judgment(type),
  });
}
/***
 * confirm
 *  text: 向用户展示的语句
 *  type: message的类型  0,1,2
 *  0: 成功   1: 警告		2:错误
 *  yesbut: 确定按钮文本
 *  nobut: 取消按钮文本
 */
export const confirm = (text,type,sure,cancel,yesbut,nobut) => {
  self.$confirm(text, '提示', {
    confirmButtonText: yesbut || '确定',
    cancelButtonText: nobut || '取消',
    type: judgment(type)
  }).then(sure).catch(cancel);
}
/***
 * prompt
 *  text: 向用户展示的语句
 *  attribute: 传递对象 key: value
 *  yesbut: 确定按钮文本
 *  nobut: 取消按钮文本
 */
export const prompt = (text,type,sure,cancel,yesbut,nobut) => {
  var datas = {
    confirmButtonText: yesbut || '确定',
    cancelButtonText: nobut || '取消',
    inputPattern: /\s{0,}[\S]{1,}[\s\S]{0,}/, // 非空验证
    inputErrorMessage:  errorMessage || '输入不能为空',
  }
  let obj = Object.assign(datas,attribute);
  self.$prompt(text, title,obj).then(sure).catch(cancel);
}



/***
 *
 * 设置 cookie
 */
export const setCookie = function(name,value,day){
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = name + '=' + value + ';expires='+ date;
};

/***
 *
 * 获取 cookie
 */
export const getCookie = function(name){
  let reg = RegExp(name+'=([^;]+)');
  let arr = document.cookie.match(reg);
  if(arr){
    return arr[1];
  }else{
    return '';
  }
};

/***
 *
 * 删除 cookie
 */
export const delCookie = function(name){
  setCookie(name,null,-1);
};
