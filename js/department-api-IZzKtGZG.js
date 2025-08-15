import{b as e,p as t}from"./index-SeYMZHv7.js";
/*
 * 部门
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2022-09-03 21:58:50
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const a={queryAllDepartment:()=>e("/department/listAll"),queryDepartmentTree:()=>e("/department/treeList"),addDepartment:e=>t("/department/add",e),updateDepartment:e=>t("/department/update",e),deleteDepartment:t=>e(`/department/delete/${t}`)};export{a as d};
