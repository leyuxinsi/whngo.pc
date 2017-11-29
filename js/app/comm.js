function friendLinks() {
    $.ajax({
        type:"post",
        url:"http://api.whngo.com/site/friend-links",
        dataType:"jsonp",
        jsonpCallback:"callback",
        success:function(data){
            if(data.code === 1){
                $(".fo-last").find('p').eq(1).html(data.friend_links);
            }
        }
    });
}