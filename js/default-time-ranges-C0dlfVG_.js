import{d as t}from"./dayjs-Dk7pxPyP.js";import{r as a}from"./@vue-wTDZSr7R.js";
/*
 * 时间选择框快捷选择
 *
 * @Author:    1024创新实验室-主任：卓大
 * @Date:      2022-09-06 20:49:28
 * @Wechat:    zhuda1024
 * @Email:     lab1024@163.com
 * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
 */const s=a([{label:"今日",value:[t(),t()]},{label:"昨日",value:[t().subtract(1,"days"),t().subtract(1,"days")]},{label:"本月",value:[t().startOf("month"),t().endOf("month")]},{label:"上个月",value:[t().subtract(1,"months").startOf("month"),t().subtract(1,"months").endOf("month")]},{label:"下个月",value:[t().subtract(-1,"months").startOf("month"),t().subtract(-1,"months").endOf("month")]},{label:"本年度",value:[t().startOf("year"),t().endOf("year")]},{label:"上年度",value:[t().subtract(1,"years").startOf("year"),t().subtract(1,"years").endOf("year")]}]);export{s as d};
