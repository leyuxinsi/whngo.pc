$(function () {
	$.ajax({
		type:"post",
		url:"http://api.whngo.com/news/sign-guide",
		dataType:"jsonp",
		jsonpCallback:"callback",
		success:function(data){
			if(data.code === 1){
				console.log(data)
				//百度模板生成公告数据
				var applyStr = baidu.template("applyTmpId",data.content);
				$(".apply .content").html(applyStr);
                friendLinks();
			}
		}
	});
});



