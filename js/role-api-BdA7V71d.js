import{p as e,b as o}from"./index-SeYMZHv7.js";
/*
 * 角色
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2022-09-03 22:00:41
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const l={queryAll:()=>o("/role/getAll"),addRole:o=>e("/role/add",o),updateRole:o=>e("/role/update",o),deleteRole:e=>o(`/role/delete/${e}`),updateDataScope:o=>e("/role/dataScope/updateRoleDataScopeList",o),getDataScopeList:()=>o("/dataScope/list"),getDataScopeByRoleId:e=>o(`/role/dataScope/getRoleDataScopeList/${e}`),queryRoleEmployee:o=>e("/role/employee/queryEmployee",o),deleteEmployeeRole:(e,l)=>o("/role/employee/removeEmployee?employeeId="+e+"&roleId="+l),batchRemoveRoleEmployee:o=>e("/role/employee/batchRemoveRoleEmployee",o),getRoleAllEmployee:e=>o(`/role/employee/getAllEmployeeByRoleId/${e}`),batchAddRoleEmployee:o=>e("/role/employee/batchAddRoleEmployee",o)};export{l as r};
