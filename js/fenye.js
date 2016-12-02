$(function(){
	//调用分页插件
				$("#jqueryPage").pagination({
					count: 100, //总数
					size: 10, //每页数量
					index: 1,//当前页
					lrCount: 3,//当前页左右最多显示的数量
					lCount: 1,//最开始预留的数量
					rCount: 1,//最后预留的数量
					callback: function (options) {
						alert(options.index);           
						//options.count = 300;
						//return options;
					},
					beforeRender: function (jA) {
						//jA.attr("href","default.php?index="+jA.text());
					}
				});
				
})