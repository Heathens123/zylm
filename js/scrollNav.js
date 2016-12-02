$(function(){
	//加载头部和底部
	//var Befo='<div class="row c_top" style="margin-left: 0;margin-right: 0;"><div class="Line"></div><div class="col-md-12 navWidth"><div class="topLeft theSame col-md-2"><img src="img/web_logo.png"/></div><div class="col-md-1 theSame size index2"><a href="index2.html">首页</a></div><div class="col-md-1 theSame size allianceIntro"><a href="allianceIntro.html">联盟介绍</a></div><div class="col-md-1 theSame size newsCenter"><a href="newsCenter.html">新闻中心</a></div><div class="col-md-1 theSame size AgencyDetails"><a href="AgencyDetails.html">社区机构</a></div><div class="col-md-1 theSame size PatientServ"><a href="seeDoctor.html">患者服务</a></div><div class="col-md-2 theSame gg fff"><a href="search.html"><img  class="sear"  src="img/searblack.png"/><b class="size2 ser">搜索</b></a></div><div class="topRight theSame col-md-3 fff"><span class="Ulogin size2"><a href="login2.html">登陆</a></span><span class="vertical_line"></span><span class="Uresiger size2"><a href="regist3.html">注册</a></span></div></div></div>';
//	var After='<div class="c_footer row"><div class="botwrap"><div class="col-md-8 klft"><div class="cont row"><div class="md-12"><h3 class="l_head">友情链接</h3><div class="platform row"><div class="col-sm-12"><ul class="platform"><li><img src="img/web_icon (2).png"/><span class="intro">智慧健康社区</span></li><li><img src="img/web_icon (2).png"/><span class="intro">智慧健康社区</span></li><li><img src="img/web_icon (2).png"/><span class="intro">智慧健康社区</span></li></ul></div>	</div></div></div><div class="cont row"><div class="col-md-12 paDDleft"><h3 class="l_foot">联系方式</h3><ul class="detail"><li><span class="comm">地址：</span><span class="Value">智慧健康社区</span></li><li><span class="comm">电话：</span><span class="Value">智慧健康社区</span></li><li><span class="comm">邮箱：</span><span class="Value">智慧健康社区</span></li></ul></div></div><div class="l_footer row"><div class="col-md-12 copyright">copyright &nbsp&nbsp 2014-2018@成都金融控股集团有限公司 &nbsp&nbsp I  &nbsp&nbsp蜀ICP备0000000000号—1</div></div></div><div class="col-md-4 QR"><div class="Wrrp"><img src="img/QRcode.png"/><div class="textinfo"><span class="wacthQR">扫描关注二维码</span><div class="content"><img src="img/erweima.png"/></div><div class="download"><span class="dleft">微信公众号</span><span class="dright">APP下载</span></div></div></div></div></div></div>';
//	var Befo2='<nav class="navbar navbar-default navDefault" role="navigation"><div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only"></span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand navBrand" href="#"><img class="web_logo" src="img/web_logo.png"/></a></div><div class="collapse navbar-collapse navbarCollapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbarNav"><li class="navComon"><a class="LinkA index" href="index.html">首页</a></li><li class="navComon"><a class="LinkA allianceIntro" href="html/folder/allianceIntro.html">联盟介绍</a></li><li class="navComon"><a class="LinkA newsCenter" href="html/folder/news.html">新闻中心</a></li><li class="navComon"><a class="LinkA AgencyDetails" href="AgencyDetails.html">社区机构</a></li><li class="navComon"><a class="LinkA PatientServ" href="html/see/list.html">患者服务</a></li></ul><form class="navbar-form navbar-left" role="search"><div class="form-group formGroup"><a class="form-control formControl" href="search.html"><img  class="sear"  src="img/searblack.png"/><b class="searchB">搜索</b></a></div></form><ul class="nav navbar-nav navbar-right"><li class="login2"><a href="login.html" class="log_pading">登陆</a><b class="loginLine"></b></li><li class="regist3"><a href="regist.html" class="log_pading">注册</a></li></ul></div></div></nav>';		
//	
//	$('.Centercontent').before(Befo2);
//	$('.Centercontent').after(After);

	//切换二维码
	$('.content img').attr('src','img/app.jpg');
	$('.dleft').on('click',function(){
		$(this).addClass('dright');
		$(this).next().removeClass('dright').addClass('dleft');
		$('.content img').attr('src','img/wechat.jpg');
	});
	$('.dright').on('click',function(){
		$(this).addClass('dright');
		$(this).prev().removeClass('dright').addClass('dleft');
		$('.content img').attr('src','img/app.jpg');
	})

})




