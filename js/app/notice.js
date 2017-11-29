$(function () {
	$.ajax({
		type:"post",
		url:"http://api.whngo.com/feed",
		dataType:"jsonp",
		jsonpCallback:"callback",
		success:function(data){
			if(data.code === 1){
				console.log(data)
				//百度模板生成公告数据
				var noticeStr = baidu.template("noticeTmpId",data);
				$(".notice .content").html(noticeStr);
				handleDot();
			}
		}
	});
});

//处理多行文本最后一行省略显示号
function handleDot() {
	$(".notice .no-info p").each(function (i) {
		if($(this).height()<300){
			$(this).removeClass("no-dot");
		}
	})
}



