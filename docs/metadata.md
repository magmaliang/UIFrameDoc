# 元数据
这里描述的仅仅是后端接口拿过来的数据，并不涉及组件在上下文中额外生成的数据——这部分的数据不是静态的。

## 标准结构
基本的元数据结构如下：
```javascript
{
	cmp_id:""
	,cmp_name:""
	,cmp_type:""
	,cmp_data:{
		metaObjName:""
		,viewName:""
	}
	,sub_cmps:[]
	,events:[]
	,layout:{}
}
```

### cmp_id
组件实例的唯一性标志

### cmp_name
组件的名称，组件类别的唯一标志。前端应该限定它的取值。
现在存在很多意义不明的取名，框架并没有用到。
eg:
```javascript
cmp_name:"BeisenCloudDemo_tab1457003311"
```

### cmp_type
组件的类别。此节点的概念与cmp_name有部分重复。

### cmp_data
组件的业务数据，上一版本中有biz_data，但在实际情况中很难划清业务数据与状态数据之间的界限，所以只保留cmp_data。

### sub_cmps
必须为数组，目前有部分接口返回的不是数组，比如indexPage的接口。
sub_cmps内子组件的结构与标准结构相同，是递归的结构。

### events
事件，它是一个数组
```javascript
events:[{
	target:"source compont name",   ／／发起动作的源组件
	commands:["changeValue"],        ／／当发起commands时触发相关事件
	relTargets:[{                   ／／联动事件
	    target:"rel compont1 name", ／／联动组件名字
	    commands:["refresh"]        ／／联动组件要执行命令
	},
	{
	    target:"rel compont2 name", 
	    commands:["fetchData"],
	    url:"xxxx?text={text}&method={get}"
	}]
}]
```
详见：[事件的设计](http://platform-docs.beisencorp.com/web/ui-framework-events.html)
标准的事件和交互在框架内，无需描述，这个节点几乎是业务人员写的，相当于一种扩展。

### layout
布局，上一版中并未实现。其方案不在本文中讨论。这里预留，以备极大可能需要的扩展。

## TabsView 
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">后端接口</span><br/>

TabsView是获取菜单数据的接口，在NatureDesign中它是一级导航。
```javascript
{
	sub_cmps:[
	{
		"cmp_id": "9181046f-7298-40cb-b2bf-6bfef3b610d5"
		,"cmp_name": "BeisenCloudDemo_information"
		,"cmp_type": "TabItemView"
		,"cmp_data":{
			"title": "基本信息"
			,"isActive":"true/false"//是否被激活
			,"type":"index/detail/iframe/url/default"
			,"menuData":{
				"metaObjName":"BeisenCloudDemo.information"
				,"viewName":""
				,"url":""
			}
		}
		,"sub_cmps": []
		,"events":[]
	}
	]
}
```

## indexPage
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">后端接口</span><br/>
```javascript
{
	cmp_data:{
		"viewName":""
	}
	,sub_cmps:{
		"views":{}
		,activeView:{
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

### views
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">indexpage子结点</span><br/>
```javascript
{
	cmp_data:{
		"activeItem":{}
		,"items":[]
	}
}
```
视图切换组件是一个dropdownlist。

### search
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">activeView子结点</span><br/>
```javascript
{
	cmp_data:{
		"title":""
		,"showTitle":""
		,"cmp_state":"search"
		,"datasource":[]
	}
	,sub_cmps:[]
}
```
搜索视图的呈现本质上可以用表单的数据适配，需要确定是否要这样做。

### buttons
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">activeView子结点</span><br/>
```javascript
{
	cmp_type:"buttonList"
	,cmp_data:{
	}
	,sub_cmps:[
		//一枚button的数据
		{
			cmp_data:{}
		}
	]
}
```
button的数据结构已经重构过，见王超相关的文档

### table
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">后端接口</span><br/>
```javascript
{
	cmp_type:"tableList"
	,cmp_data:{
		columns:[]
		,rows:[]
		,state:{
			total:"152"
			,capacity:"15"//每页容量
			,page:"2"//当前所处页
		}
		,metaObjName:""
		,viewName:""
	}
}
```
当前元数据中tablelist是多租赁时期的接口，当时没有推动后端去改。


## DetailPage
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">后端接口</span><br/>
```javascript
{
	cmp_type:"DetailPage"
	,cmp_data:{
		metaObjName:""
		,viewName:""
		,title:""
		,type:"onepage/tabpage"
	}
	,sub_cmps:[
		{pageModule:{}}
	]
}
```
### pageModule
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">DetailPage子结点</span><br/>
```javascript
{
	cmp_data:{
		title:""
		,isShowTitle:"true/false"
	}
	,sub_cmps:[
		{buttonlist:{}}
		,{form:{}}
	]
}
```
在上一版产品上有一个非常不合理的标题问题，这版坚决不做。


### tabpage
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">DetailPage子结点</span><br/>
```javascript
{
	cmp_data:{
		title:""
		,isShowTitle:"true/false"
	}
	,sub_cmps:[
		"items":{}
		,activeitem:{pageModule:{}}//激活的tab内容区是一个pageModule
	]
}
```
tabpage在结构上类似于indexpage,其实它们交互的本质是一样的。


### form
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">DetailPage子结点</span><br/>
```javascript
{
	cmp_data:{
		title:""
		,isShowTitle:"true/false"
		,viewName:""
		,metaObjName:""
		,cmp_state:"show/edit/search/default"
	}
	,sub_cmps:[
		{formPart:{}}
	]
}
```

### formpart
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">form子结点</span><br/>
```javascript
{
	cmp_data:{
		title:""
		,isShowTitle:"true/false"
		,viewName:""
		,metaObjName:""
		,cmp_state:"show/edit/search/default"
	}
	,sub_cmps:[
		{formFeild:{}}
	]
}
```

### formFeild
<span style="background-color:#1687d9;color:#fff;padding:3px 5px;border-radius: 3px;">form子结点</span><br/>
```javascript
{
	
	cmp_type:""
	,cmp_data:{
		value:""
		,text:""
		,label:""
		,cmp_state:""
	}
	,validators:{}
}
```