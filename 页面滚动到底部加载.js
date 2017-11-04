$(window).scroll(function(){  
    var viewH =$("body").height(),//文档高度
        scrollTop =$(window).scrollTop();
    if(viewH-scrollTop<=$(window).height()+200){//增减 200 控制加载时的高度
        $("body").height("+=200px");
    }  
});
