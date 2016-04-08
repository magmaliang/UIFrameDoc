# pagemodule
pagemodule主要为页面划分区块。它最多只有两个子组件，可能的组合如下：
- buttonlist,table
- buttonlist,form
- tabpage

其中buttonlist并不是必须的。

## 元数据
```javascript
{
	cmp_data:{
		title:""
		,isShowTitle:""
		,isDefault:true/false
	}
	,sub_cmps:[]
}
```