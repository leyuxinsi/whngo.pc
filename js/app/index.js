$(function () {
    $.ajax({
        type:"post",
        url:"http://api.whngo.com",
        dataType:"jsonp",
        jsonpCallback:"callback",
        success:function(data){
            if(data.code === 1){
                var end_time = data.end_time.date_time.replace(/-/g,"/");
                getEndtime(end_time);
                //百度模板生成轮播图数据
                var swipperStr = baidu.template("swipperTmpId",data);
                $(".index .logo .right").html(swipperStr);
                //初始化轮播图

                //百度模板生成banner数据
                var bannerStr = baidu.template("indexBannerTmpId",data);
                $(".index .banner").html(bannerStr);
                //百度模板生成公告数据
                var noticeStr = baidu.template("indexNoticeTmpId",data);
                $(".index .in-notice div").html(noticeStr);
                //百度模板生成评论数据
                var commentStr = baidu.template("indexCommentTmpId",data);
                $(".index .in-support .in-comment").html(commentStr);
                var mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay : 3000,
                    autoplayDisableOnInteraction:false,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    // 如果需要前进后退按钮
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                });

                $("#fixed_sign_box_src").attr('src',data.sign_enter);
            }
        }
    });
});

//倒计时函数
function getEndtime(time) {
    var b = new Date;
    var b = -b.getTimezoneOffset() / 60;
    var i = time;
    var config = {
        timeText: i, //倒计时时间
        timeZone: b, //时区
        style: "flip", //显示的样式，可选值有flip,slide,metal,crystal
        color: "black", //显示的颜色，可选值white,black
        width: 0, //倒计时宽度
        textGroupSpace: 15, //天、时、分、秒之间间距
        textSpace: 0, //数字之间间距
        reflection: !0, //是否显示倒影
        reflectionOpacity: 10, //倒影透明度
        reflectionBlur: 0, //倒影模糊程度
        dayTextNumber: 3, //倒计时天数数字个数
        displayDay: !0, //是否显示天数
        displayHour: !0, //是否显示小时数
        displayMinute: !0, //是否显示分钟数
        displaySecond: !0, //是否显示秒数
        displayLabel: !0, //是否显示倒计时底部label
        onFinish: function() {}
    };
    //$(".countdown").jCountdown(config);
}


