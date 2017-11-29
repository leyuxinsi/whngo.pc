var pn = 2;
$(function () {
	getMore(1);
});

function getMore(pn) {
	$.ajax({
		type:"post",
		url:"http://api.whngo.com/news",
		data:"page="+pn+"&page_size=10",
		dataType:"jsonp",
		jsonpCallback:"callback",
		success:function(data){
			if(data.code === 1){
				console.log(data)
				//百度模板生成公告数据
				var eventStr = baidu.template("eventTmpId",data);
				$(".event .content .co-list").append(eventStr);
				handleDot();
				if(data.next_load && $(".event .showmore").length === 0){
					$(".event .content").append('<button class="showmore">加载更多</button>');
				}
				if(!data.next_load && $(".itemList .showmore").length > 0){
					$(".event .content .showmore").addClass("hide");
				}
                friendLinks();
			}
		}
	});
}

//处理多行文本最后一行省略显示号
function handleDot() {
	$(".event .ev-list .ev-text").each(function (i) {
		if($(this).height()<=56){
			$(this).removeClass("no-dot");
		}
	})
}

//点击加载更多
$(document).on("click",".event .showmore",function () {
	getMore(pn);
	pn += 1;
});

