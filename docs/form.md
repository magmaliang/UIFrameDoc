# 表单
表单是较复杂的一个组件，复杂点主要是其状态较多。

## 元数据
``` javascript
{
	cmp_type:"form"
	,cmp_data:{
		metaObjName:""
		,title:""
		,cmp_state:"show/edit/search"
		,isShowTitle:true/false
	}
	,sub_cmps:[]
	
}
```
form的子组件是[formitem](#docs/formitem/baseitem)，它是原子组件。

## 接口
后端为了描述[formlist](#docs/formlist)，接口返回的数据是这样的：
``` javascript
{
	cmp_type:"form"
	,cmp_data:{
		metaObjName:""
		,title:""
		,cmp_state:"show/edit/search"
		,isShowTitle:true/false
	}
	,sub_cmps:[]
	,biz_data:[{}]
	
}
```
可以看到比我们的元数据多一个biz_data，因为多个form共用一套字段模版，只是数据不同，所以后端做了这样一个优化。但是form不应该接收这样的数据，因为不够直观，所以我们在做组件的时候要format成直观的数据，即上面的
元数据。

## 例子
``` javascript
{
	"cmp_id": "2d8fd91e-eda2-4a0f-817f-178a91da50c3",
	"cmp_name": "BeisenCloudDemo_SupplierCRUD",
	"cmp_type": "Form",
	"version": "0",
	"viewName": "BeisenCloudDemo.SupplierCRUD",
	"cmp_data": {
	"metaObjectName": "BeisenCloudDemo.SupplyInfo",
	"layout": null,
	"cmp_state": "show",
	"title": "供应商信息",
	"titleIcon": null,
	"description": "供应商信息",
	"formState": "show",
	"view": "",
	"template": null,
	"showTitle": true,
	"context": {
	"_metaObjID": "2d8fd91e-eda2-4a0f-817f-178a91da50c3",
	"_objectDataID": "bccb8969-ba19-4023-aab3-77ec87fd4848"
	}
	},
	"sub_cmps": [
	{
	"cmp_id": "2d8fd91e-eda2-4a0f-817f-178a91da50c3_part0",
	"cmp_name": "BeisenCloudDemo_SupplierCRUD_part0",
	"cmp_type": "FormPart",
	"sub_cmps": [
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
	{
	"cmp_id": "32af3391-b655-4a9a-91d2-f0cb19812e89",
	"cmp_name": "BeisenCloudDemoSupplyInfo_Telephone",
	"cmp_type": "BC_TextBox",
	"cmp_label": "联系电话",
	"cmp_data": {
	"field_name": "Telephone",
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
	"validators": []
	},
	{
	"cmp_id": "fdd217a6-975e-448e-b954-ddea41899fbe",
	"cmp_name": "BeisenCloudDemoSupplyInfo_ContactUser",
	"cmp_type": "BC_TextBox",
	"cmp_label": "联系人",
	"cmp_data": {
	"field_name": "ContactUser",
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
	"validators": []
	},
	{
	"cmp_id": "41794439-6847-40e3-98b7-c02b7419e959",
	"cmp_name": "BeisenCloudDemoSupplyInfo_Adress",
	"cmp_type": "BC_TextBox",
	"cmp_label": "地址",
	"cmp_data": {
	"field_name": "Adress",
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
	"validators": []
	},
	{
	"cmp_id": "d49140dd-8e67-4123-954e-1c5c11c31580",
	"cmp_name": "BeisenCloudDemoSupplyInfo_DockUser",
	"cmp_type": "BC_UserSelect",
	"cmp_label": "对接人",
	"cmp_data": {
	"singleSelect": false,
	"field_name": "DockUser",
	"cmp_state": "show",
	"cmp_status": "readonly",
	"editdisplaystate": "editable",
	"createdisplaystate": "editable",
	"showdisplaystate": "readonly",
	"datasourcename": "BCStaffDataSource"
	},
	"search_data": null,
	"biz_data": {
	"text": ""
	},
	"validators": []
	},
	{
	"cmp_id": "8304f860-f638-4757-9c8c-33d86faf6a07",
	"cmp_name": "BeisenCloudDemoSupplyInfo_faren",
	"cmp_type": "BC_TextBox",
	"cmp_label": "法人",
	"cmp_data": {
	"field_name": "faren",
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
	"validators": []
	}
	],
	"cmp_data": {
	"showTitle": true,
	"label": "供应商信息",
	"templateName": "DefaultPartTitle",
	"createdisplaystate": "editable",
	"editdisplaystate": "editable",
	"showdislaystate": "readonly",
	"maxColumnCount": 1,
	"visible": true
	}
	}
	],
	"biz_data": [
	{
	"_id": {
	"name": "_id",
	"text": "bccb8969-ba19-4023-aab3-77ec87fd4848",
	"value": "bccb8969-ba19-4023-aab3-77ec87fd4848"
	},
	"BeisenCloudDemoSupplyInfo_DockUser": {
	"name": "BeisenCloudDemoSupplyInfo_DockUser",
	"text": "张旺(zhangwang@beisen.com)",
	"value": "100372952"
	},
	"BeisenCloudDemoSupplyInfo_Name": {
	"name": "BeisenCloudDemoSupplyInfo_Name",
	"text": "腾讯",
	"value": "腾讯"
	},
	"BeisenCloudDemoSupplyInfo_ModifiedTime": {
	"name": "BeisenCloudDemoSupplyInfo_ModifiedTime",
	"text": "2016/03/30 19:15:11",
	"value": "3/30/2016 7:15:11 PM"
	},
	"BeisenCloudDemoSupplyInfo_faren": {
	"name": "BeisenCloudDemoSupplyInfo_faren",
	"text": null,
	"value": null
	},
	"BeisenCloudDemoSupplyInfo_CreatedTime": {
	"name": "BeisenCloudDemoSupplyInfo_CreatedTime",
	"text": "2016/03/22 09:58:25",
	"value": "3/22/2016 9:58:25 AM"
	},
	"BeisenCloudDemoSupplyInfo_ModifiedBy": {
	"name": "BeisenCloudDemoSupplyInfo_ModifiedBy",
	"text": "100372825",
	"value": "100372825"
	},
	"BeisenCloudDemoSupplyInfo_Name_Pinyin": {
	"name": "BeisenCloudDemoSupplyInfo_Name_Pinyin",
	"text": null,
	"value": null
	},
	"BeisenCloudDemoSupplyInfo_suozaidiqu": {
	"name": "BeisenCloudDemoSupplyInfo_suozaidiqu",
	"text": null,
	"value": null
	},
	"BeisenCloudDemoSupplyInfo_CreatedBy": {
	"name": "BeisenCloudDemoSupplyInfo_CreatedBy",
	"text": "100372825",
	"value": "100372825"
	},
	"BeisenCloudDemoSupplyInfo_Adress": {
	"name": "BeisenCloudDemoSupplyInfo_Adress",
	"text": "深圳",
	"value": "深圳"
	},
	"BeisenCloudDemoSupplyInfo_ContactUser": {
	"name": "BeisenCloudDemoSupplyInfo_ContactUser",
	"text": "马化腾",
	"value": "马化腾"
	},
	"BeisenCloudDemoSupplyInfo_Telephone": {
	"name": "BeisenCloudDemoSupplyInfo_Telephone",
	"text": "010-22222222",
	"value": "010-22222222"
	}
	}
	]
}
```