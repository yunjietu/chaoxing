import{b as e,p as t}from"./index-SeYMZHv7.js";
/**
 * 职务表 api 封装
 *
 * @Author:    kaiyun
 * @Date:      2024-06-23 23:31:38
 * @Copyright  <a href="https://1024lab.net">1024创新实验室</a>
 */const i={queryPage:e=>t("/position/queryPage",e),add:e=>t("/position/add",e),update:e=>t("/position/update",e),delete:t=>e(`/position/delete/${t}`),batchDelete:e=>t("/position/batchDelete",e),queryList:()=>e("/position/queryList")};export{i as p};
