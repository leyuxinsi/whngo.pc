require.config({
    // map:{
    //     '*': {
    //         'css': 'css/lib'
    //     }
    // },
    paths : {
        /*plugins*/
        "jquery" : ["js/lib/jquery-1.8.2.min"],//jquery
        "jcuntdown":["js/lib/jquery.jcountdown.min"],//jcountdown
        "baiduTemplate" : ["js/lib/baiduTemplate"],//baiduTemplate
        "swiper":["js/lib/swiper-3.4.2.jquery.min"],//swiper轮播插件
        "dropload":["js/lib/dropload.min"],//dropload刷新插件
    },
    //暴露非AMD模型
    shim: {
        /*css关联插件*/
        "jcuntdown":["css!../css/lib/jcountdown.css"],//jcountdown
        "swiper" : ["css!../css/lib/swiper-3.4.2.min.css"],//swiper关联css
        "dropload" : ["css!../css/lib/dropload.css"],//dropload关联css
        /*js依赖关系*/
        // "lazyload" : ["jquery"]
    }
});

