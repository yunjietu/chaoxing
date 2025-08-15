import{p as e,b as t,j as o}from"./index-SeYMZHv7.js";
/*
 * 职校家园账号管理
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2025-07-20 12:09:00
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const a={create:t=>e("/oa/account/create",t),delete:e=>t(`/oa/account/delete/${e}`),detail:e=>t(`/oa/account/get/${e}`),pageQuery:t=>e("/oa/account/page/query",t),exportExcel:e=>o("/oa/account/exportExcel",e),queryList:()=>t("/oa/account/query/list"),update:t=>e("/oa/account/update",t),getZhixiaoUserInfo:t=>e("/oa/account/getZhixiaoUserInfo",t),getInternshipInfoByAccount:t=>e("/oa/account/getInternshipInfoByAccount",t),getInternshipInfo:t=>e("/oa/account/getInternshipInfo",t),getUserInfoByToken:t=>e("/oa/account/getUserInfoByToken",t),queryDuplicateAccount:()=>t("/oa/account/duplicate/list"),deleteDuplicateAccount:()=>e("/oa/account/duplicate/delete"),getInternshipDetail:t=>e("/oa/account/getInternshipDetail",t)};export{a};
