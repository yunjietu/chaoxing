import{p as e,b as a}from"./index-SeYMZHv7.js";
/**
 * 系统更新日志 api 封装
 *
 * @Author:    卓大
 * @Date:      2022-09-26 14:53:50
 * @Copyright  1024创新实验室
 */const t={queryPage:a=>e("/support/changeLog/queryPage",a),add:a=>e("/support/changeLog/add",a),update:a=>e("/support/changeLog/update",a),delete:e=>a(`/support/changeLog/delete/${e}`),batchDelete:a=>e("/support/changeLog/batchDelete",a)};export{t as c};
