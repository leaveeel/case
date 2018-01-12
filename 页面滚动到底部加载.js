$(window).scroll(function(){  
    var viewH =$("body").height(),//文档高度
        scrollTop =$(window).scrollTop();
    if(viewH-scrollTop<=window.screen.height+200){//屏幕高度增加 200 控制加载时的位置
        $("body").height("+=200px");
    }  
});
