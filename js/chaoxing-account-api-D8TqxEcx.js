import{p as o,b as a}from"./index-SeYMZHv7.js";
/*
 * 学习通账号管理
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2025-07-20 12:09:00
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ）,Since 2012
 */const c={create:a=>o("/oa/chaoxing-account/create",a),delete:o=>a(`/oa/chaoxing-account/delete/${o}`),detail:o=>a(`/oa/chaoxing-account/get/${o}`),pageQuery:a=>o("/oa/chaoxing-account/page/query",a),update:a=>o("/oa/chaoxing-account/update",a),getChaoxingUserInfo:a=>o("/oa/chaoxing-account/getChaoxingUserInfo",a),getLocationFromAddress:a=>o("/oa/chaoxing-account/getLocationFromAddress",a),getChaoxingCourses:a=>o("/oa/chaoxing-account/getChaoxingCourses",a),clockIn:a=>o("/oa/chaoxing-account/clockIn",a),clockInHistory:a=>o("/oa/chaoxing-account/clockInHistory",a)};export{c};
