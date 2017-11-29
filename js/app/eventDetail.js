$(function () {
	var news_id = window.location.search.slice(1);
	$.ajax({
		url:"http://api.whngo.com/news/item",
		data:news_id,
		dataType:"jsonp",
		success:function(data){
			if(data.code === 1){
				console.log(data)
				//百度模板生成详情数据
				var eventDetailTitleStr = baidu.template("eventDetailContentTmpId",data.news_info);
				$(".eventDetail .content").append(eventDetailTitleStr);
                friendLinks();
			}
		}
	});
});



