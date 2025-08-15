import{b as e,p as u}from"./index-SeYMZHv7.js";
/*
 * 菜单
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2022-09-03 22:00:32
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const n={addMenu:e=>u("/menu/add",e),updateMenu:e=>u("/menu/update",e),batchDeleteMenu:u=>e(`/menu/batchDelete?menuIdList=${u}`),queryMenu:()=>e("/menu/query"),queryMenuTree:u=>e(`/menu/tree?onlyMenu=${u}`),getAuthUrl:()=>e("/menu/auth/url")};export{n as m};
