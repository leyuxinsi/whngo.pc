var pn = 2;
$(function () {
	getMore(1);
});

//处理多行文本最后一行省略显示号
function handleDot() {
	$(".itemList .ev-list .ev-text").each(function (i) {
		if($(this).height()<=55){
			$(this).removeClass("no-dot");
		}
	})
}

function getMore(pn) {
	$.ajax({
		type:"post",
		url:"http://api.whngo.com/project",
		data:"page="+pn+"&page_size=10",
		dataType:"jsonp",
		jsonpCallback:"callback",
		success:function(data){
			if(data.code === 1){
				console.log(data)
				//百度模板生成公告数据
				var itemStr = baidu.template("itemListTmpId",data);
				$(".itemList .content .co-list").append(itemStr);
				handleDot();
				if(data.next_load && $(".itemList .showmore").length === 0){
					$(".itemList .content").append('<button class="showmore">加载更多</button>');
				}
				if(!data.next_load && $(".itemList .showmore").length > 0){
					$(".itemList .content .showmore").addClass("hide");
				}
			}
		}
	});
}

//点击加载更多
$(document).on("click",".itemList .showmore",function () {
	getMore(pn);
	pn += 1;
});

