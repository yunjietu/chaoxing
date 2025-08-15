import{p as e,b as t}from"./index-SeYMZHv7.js";
/*
 * 类目api
 *
 * @Author:    卓大
 * @Date:      2022-09-03 21:35:00
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const a={addCategory:t=>e("/category/add",t),deleteCategoryById:e=>t(`/category/delete/${e}`),queryCategoryTree:t=>e("/category/tree",t),updateCategory:t=>e("/category/update",t)};export{a as c};
