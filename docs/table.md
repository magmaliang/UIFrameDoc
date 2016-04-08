# table

## 元数据
```javascript
{
    cmp_type:"tableList"
    ,cmp_data:{
        paging:{
            total:"152"
            ,capacity:"15"//每页容量
            ,page:"2"//当前所处页
            ,capacityList:[15,30,60,100]
        }
        ,metaObjName:""
        ,viewName:""
    }
	,columns:[] //列定义
	,rows:[]    //行数据
}
```

## columns
columns定义列属性

### 元数据
```javascript
[{
	name:"_id"
	,type:"checkbox/link/text"
	,title:"姓名"
	,className:""
	,sortable:true/false //可否排序
	,visible:true/false
	,link_data:{
		template:"<a class="del-link" href="javascript:void(0);"><%= Name1%></a>"
		,type:"delete/edit/confirm/pop"
		,events:{
			"click del-link":"delete"
			,handlers:[
				delete:function(context){
				}
			]
		}
		
	}
}]
```

## rows
行
### 元数据
```javascript
[{
	isCheked:true/fault
	,Name1:"第一列"
	,zhuzhide:"韩国"
}]
```