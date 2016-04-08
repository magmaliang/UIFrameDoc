# formitem
表单的子组件。

## 元数据
```javascript
{
	cmp_type:"BC_TextBox"
	,cmp_data:{
		name:"Name"   // 字段名
		,value:"张三" // 值
		,label:"姓名" // 标签名
		,status:"readonly/editable/search/default"
		,desc:"必填"  // placehold
	}
	,datasource:[]    // 对于下拉列表等组件，列表项需要数据源
	,validators:[{    // 验证
		type:"reg/default"
		,rule:""      // 可以写正则表达式，或者number/required等即有验证规则
		,msg:""
	}]   
}
```
## 接口数据
因为formfeild的最终状态与它的父组件（form）有关，状态是计算出来的，与元数据有区别
```javascript
{
"cmp_id": "019301c0-2cf0-486e-ac2e-1d16dadc55ca",
"cmp_name": "BeisenCloudDemoSupplyInfo_Name",
"cmp_type": "BC_TextBox",
"cmp_label": "供应商名称",
"cmp_data": {
"field_name": "Name",
"cmp_state": "show",
"cmp_status": "readonly",
"editdisplaystate": "editable",
"createdisplaystate": "editable",
"showdisplaystate": "readonly"
},
"search_data": null,
"biz_data": {
"text": ""
},
"validators": [
{
"type": "required",
"rule": "true",
"message": "输入不能为空"
}
]
},
```