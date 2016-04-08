# indexpage

```javascript
{
	cmp_data:{
		"viewName":""
	}
	,sub_cmps:{
		"views":{}//所有视图
		,activeView:{//激活的视图
			"cmp_data"{}
			,"sub_cmps":[
				{searchform:{}}
				,{buttons:{}}
				,{tablelist:{}}
			]
		}
	}
}
```

## views
```javascript
{
	"cmp_data": {
		"activeViewID": "842eca26-060d-473a-84ec-d60d5b15183b",
		"items": [{
			"cmp_id": "842eca26-060d-473a-84ec-d60d5b15183b",
			"cmp_name": "BeisenCloudDemo_SupplierView",
			"cmp_type": null,
			"version": "0",
			"text": "供应商列表试图",
			"value": "BeisenCloudDemo.SupplierView",
			"search_view": "BeisenCloudDemo.SupplierSearch",
			"list_view": "BeisenCloudDemo.SingleObjectListView.SupplierList"
		}],
	}
}
```

## search_form
```javascript
"search_form": {
	"cmp_id": "5bcb30be-44f1-4899-afa4-2bca1d4788b2",
	"cmp_name": "BeisenCloudDemo_SupplierSearch",
	"cmp_type": "SearchForm",
	"version": "0",
	"viewName": "BeisenCloudDemo.SupplierSearch",
	"cmp_data": {
		"cmp_type": null,
		"layout": "default",
		"showTitle": true,
		"cmp_state": "edit",
		"title": "供应商搜索",
		"metaObjectName": "BeisenCloudDemo.SupplyInfo",
		"datasource": [{
			"key": "BCStaffDataSource",
			"dataSourceResults": [],
			"fieldName": null
		}]
	},
	"sub_cmps": [{
		"cmp_id": "019301c0-2cf0-486e-ac2e-1d16dadc55ca",
		"cmp_name": "Name",
		"cmp_type": "BC_TextBox",
		"cmp_label": "供应商名称",
		"cmp_data": {
			"field_name": "Name",
			"cmp_state": "search",
			"cmp_status": "editable",
			"searchdisplaystate": "editable"
		},
		"search_data": {
		"opeartor": "include",
		"seperator": "-",
		"metaobjectname": "BeisenCloudDemo.SupplyInfo"
		},
		"biz_data": {
		"text": ""
		},
		"validators": null
	},
	{
		"cmp_id": "41794439-6847-40e3-98b7-c02b7419e959",
		"cmp_name": "Adress",
		"cmp_type": "BC_TextBox",
		"cmp_label": "地址",
		"cmp_data": {
			"field_name": "Adress",
			"cmp_state": "search",
			"cmp_status": "editable",
			"searchdisplaystate": "editable"
		},
		"search_data": {
			"opeartor": "include",
			"seperator": "-",
			"metaobjectname": "BeisenCloudDemo.SupplyInfo"
		},
		"biz_data": {
			"text": ""
		},
		"validators": null
	},
	{
		"cmp_id": "d49140dd-8e67-4123-954e-1c5c11c31580",
		"cmp_name": "DockUser",
		"cmp_type": "BC_UserSelect",
		"cmp_label": "对接人",
		"cmp_data": {
			"singleSelect": false,
			"field_name": "DockUser",
			"cmp_state": "search",
			"cmp_status": "editable",
			"searchdisplaystate": "editable",
			"datasourcename": "BCStaffDataSource"
		},
		"search_data": {
			"opeartor": "eq",
			"seperator": "-",
			"metaobjectname": "BeisenCloudDemo.SupplyInfo"
		},
		"biz_data": {
			"text": ""
		},
		"validators": null
	},
	{
		"cmp_id": "8304f860-f638-4757-9c8c-33d86faf6a07",
		"cmp_name": "faren",
		"cmp_type": "BC_TextBox",
		"cmp_label": "法人",
		"cmp_data": {
			"field_name": "faren",
			"cmp_state": "search",
			"cmp_status": "editable",
			"searchdisplaystate": "editable"
		},
		"search_data": {
		"opeartor": "include",
		"seperator": "-",
		"metaobjectname": "BeisenCloudDemo.SupplyInfo"
		},
		"biz_data": {
		"text": ""
		},
		"validators": null
	}
	]
}
```