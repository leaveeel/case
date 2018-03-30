// 可以用ajax或者.load()方式加载
//ajax
document.ready(function(){
    if(!$("body .element").html()){//判断页面中是否存在该元素
        $.ajax({
            url: '/public/phead',
            type: "GET",
            datetype:"html",//数据类型为html，取得html数据
            success: function(data){
                $('body').prepend(data);
            }
        });
    }
});
//load
//load加载会替换掉dom内元素，需要在页面中预留标签加载
document.ready(function(){
    $(".element").load("/public/phead");
});
