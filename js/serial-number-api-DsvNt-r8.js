import{p as e,b as r}from"./index-SeYMZHv7.js";
/*
 * 单据序列号
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2022-09-03 21:57:52
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const s={generate:r=>e("/support/serialNumber/generate",r),getAll:()=>r("/support/serialNumber/all"),queryRecord:r=>e("/support/serialNumber/queryRecord",r)};export{s};
