import{p as r,b as e}from"./index-SeYMZHv7.js";
/*
 * reload (内存热加载、钩子等)
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2022-09-03 21:57:19
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const o={queryList:()=>e("/support/reload/query"),queryReloadResult:r=>e(`/support/reload/result/${r}`),reload:e=>r("/support/reload/update",e)};export{o as r};
