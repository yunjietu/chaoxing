import{_ as e}from"./lodash-DG05lPuJ.js";
/*
 * 此文件是处理 菜单数据的类，主要用于：
 * 1、菜单树形表格的构造
 * 2、菜单的前端过滤
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2022-06-15 16:47:20
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const n=(e,n)=>{if(!e||0===e.length)return[];let i=[];for(const l of e)t(l,n.keywords)&&s(l,n.menuType)&&a(l,n)&&i.push(l);return i},i=e=>{let n=[];const i=new Set;for(const l of e)i.add(l.menuId);for(const l of e){const e=l.parentId;i.has(e)||n.push(l)}return l(e,n),n};function l(e,n){for(const i of n){const n=e.filter((e=>e.parentId===i.menuId));n.length>0&&(i.children=n,l(e,i.children))}}function a(n,i){let l=!1;l=!!e.isNil(i.frameFlag)||!e.isNil(n.frameFlag)&&n.frameFlag===(1===i.frameFlag);let a=!1;a=!!e.isNil(i.cacheFlag)||!e.isNil(n.cacheFlag)&&n.cacheFlag===(1===i.cacheFlag);let s=!1;s=!!e.isNil(i.visibleFlag)||!e.isNil(n.visibleFlag)&&n.visibleFlag===(1===i.visibleFlag);let t=!1;return t=!!e.isNil(i.disabledFlag)||!e.isNil(n.disabledFlag)&&n.disabledFlag===(1===i.disabledFlag),l&&a&&s&&t}function s(e,n){return!n||!(!e.menuType||e.menuType!==n)}function t(e,n){return!n||(!!(e.component&&e.component.indexOf(n)>-1)||(!!(e.menuName&&e.menuName.indexOf(n)>-1)||(!!(e.path&&e.path.indexOf(n)>-1)||(!!(e.apiPerms&&e.apiPerms.indexOf(n)>-1)||!!(e.webPerms&&e.webPerms.indexOf(n)>-1)))))}export{i as b,n as f};
