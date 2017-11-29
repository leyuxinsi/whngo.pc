const pro_id = window.location.search.slice(1);
var pn = 2;
$(function () {
	$.ajax({
		url:"http://api.whngo.com/project/item",
		data:pro_id,
		dataType:"jsonp",
		success:function(data){
			if(data.code === 1){
				console.log(data)
				//百度模板生成详情title数据
				var itemDetailTitleStr = baidu.template("itemDetailTitleTmpId",data);
				$(".itemDetail .content .il-title").append(itemDetailTitleStr);
				//百度模板生成详情content数据
				var itemDetailContentStr = baidu.template("itemDetailContentTmpId",data);
				$(".itemDetail .content .il-arctile").html(itemDetailContentStr);
                friendLinks();
			}
		}
	});
	getSupport(1,pro_id);
});

$(document).on("click",".itemDetail .showmore",function () {
	getSupport(pn,pro_id);
	pn += 1;
});

function getSupport(pn,pro_id) {
	$.ajax({
		url:"http://api.whngo.com/project/support",
		data:pro_id+"&page="+pn+"&page_size=10",
		dataType:"jsonp",
		success:function(data){
			if(data.code === 1){
				console.log(data)
				//百度模板生成详情support数据
				var itemDetailSupportStr = baidu.template("itemDetailSupportTmpId",data);
				$(".itemDetail .content .il-supporters").append(itemDetailSupportStr);
				if(data.next_load && $(".itemDetail .showmore").length === 0){
					$(".itemDetail .content .il-support").append('<button class="showmore">加载更多</button>');
				}
				if(!data.next_load && $(".itemList .showmore").length > 0){
					$(".itemDetail .content .showmore").addClass("hide");
				}
			}
		}
	});
}

$("#support_btn").on('click',function () {
    console.log(pro_id);
    swal({
        title: "扫码去手机支持",
        text: "扫描上图的二维码，即可去手机页面投票",
        imageUrl: "http://api.whngo.com/project/qr-code?"+pro_id,
        imageSize:"162x162",
        confirmButtonText:"关闭",
        confirmButtonColor:"#cb0101",
        allowEscapeKey:false
    });
});