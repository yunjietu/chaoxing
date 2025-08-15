import{p as e,i as t}from"./index-SeYMZHv7.js";
/*
 * 登录日志
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2022-09-03 21:56:31
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const o={queryList:t=>e("/support/loginLog/page/query",t),queryListLogin:t=>e("/support/loginLog/page/query/login",t)};function a(e,o,a){let s=0;if(o&&o.length>0)for(const t of o)s+=t.value.$el.offsetHeight;let g=40;t().$state.pageTagFlag&&(g+=40),t().$state.footerFlag&&(g+=40),s=s+a+g,e.value=document.querySelector("#smartAdminLayoutContent").offsetHeight-s}export{a as c,o as l};
