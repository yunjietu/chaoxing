import{p as e,g as r,b as t,j as p}from"./index-SeYMZHv7.js";
/*
 * 企业信息
 *
 * @Author:    开云
 * @Date:      2022-09-03 21:47:28
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const a={create:r=>e("/oa/enterprise/create",r),delete:e=>t(`/oa/enterprise/delete/${e}`),detail:e=>t(`/oa/enterprise/get/${e}`),pageQuery:r=>e("/oa/enterprise/page/query",r),exportExcel:e=>p("/oa/enterprise/exportExcel",e),queryList:e=>{let r="";return e&&(r=`?type=${e}`),t(`/oa/enterprise/query/list${r}`)},update:r=>e("/oa/enterprise/update",r),employeeList:r=>e("/oa/enterprise/employee/list",r),queryPageEmployeeList:r=>e("/oa/enterprise/employee/queryPage",r),addEmployee:r=>e("/oa/enterprise/employee/add",r),deleteEmployee:r=>e("/oa/enterprise/employee/delete",r),downloadTemplate:()=>r("/oa/enterprise/downloadTemplate"),importEnterprise:r=>e("/oa/enterprise/import",r)};export{a as e};
