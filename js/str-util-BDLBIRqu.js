/*
 * 字符串 相关操作
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2022-09-06 20:58:49
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */
function e(e){return e?e.replace(/([A-Z])/g,"-$1").toLowerCase().substring(1):""}function r(e){return e?(e=e.replace(/_(\w)/g,((e,r)=>r.toUpperCase())))[0].toUpperCase()+e.substring(1):""}function t(e){return e?e.replace(/_(\w)/g,((e,r)=>r.toUpperCase())):""}export{r as a,t as b,e as c};
