//居中显示index=0的元素，计算方法为img.width()-(屏幕尺寸-img.width()*img[要居中显示].index())+(屏幕尺寸-img.width())/2, .box的margin-left同；
$(".pic").scrollLeft(204);
var ai,gi,ul,l,w;
$(".pic img").click(function(){
    //清空内容，防止重复添加；
    $(".box ul").html('');
    $(".box .dot").html('');
    $(".box h4").html('');
    //获取打乱排序后点击的index；
    ai=$(this).attr("index");
    $(".box").removeClass("dn");
    //循环添加图片，属性，名称……
    var num;
    if(ai==0){
        num=0;
    }
    if(ai==1){
        num=5;
    }
    if(ai==2){
        num=10;
    }
    for(var i=0;i<5;i++){
        num++;
        $(".box ul").append(
            '<li class="fl oh">'+
                '<div class="oh">'+
                '<img class="db" src="" width=310 height=310 name='+num+' ename='+num+' />'+
                '<p class="name">'+num+'</p>'+
                '<span class="fr"></span>'+
                '<p class="ename">'+num+'</p>'+
                '</div>'+
                '</li>');
    }
    $(".box ul li").eq(0).addClass("scale1");
    gi=$(".box");
    ul=gi.find("ul");
    l=ul.find("li").length;
    w=ul.find("li").width();
    ul.width(l*(w+40));
    //添加控制点，序号
    for(var j=0;j<l;j++){
        gi.find(".dot").append('<span class="fl"></span>');
    }
    gi.find(".dot span").eq(0).addClass("choose");
    gi.find(".dot").width(l*42);
    gi.find("h4").html('<div><em>1</em>/'+l+'</div>');
    //排序
    if(l==1){
        ul.css({"margin-left":"auto","margin-right":"auto"});
    }else if(l==2){
        ul.css({"margin-left":(750-470)/2});
    }else{
        ul.find("li").eq(0).before(gi.find("ul li").eq(l-1))
        ul.css("margin-left",-330);
    }
    gi.find(".close").click(function(){
        $(this).parent().addClass("dn");
    });
});
var startX, endX;
document.getElementById("showTagId").addEventListener("touchstart", touchStart, false);
document.getElementById("showTagId").addEventListener("touchmove", touchMove, false);
document.getElementById("showTagId").addEventListener("touchend", touchEnd, false);
function touchStart(event) {
    var touch = event.touches[0];
    startX = touch.pageX;
}
function touchMove(event) {
    var touch = event.touches[0];
    endX = touch.pageX;
}
function touchEnd(event) {
    var line = startX - endX;
    if(l>=3){
        if (line > 100) {
            //获取当前图片，调整图片位置用来循环，同时控制序号和点的显示
            var index=index=ul.find(".scale1").index();
            ul.find("li").eq(index+1).addClass("scale1").siblings().removeClass("scale1");
            ul.css("margin-left",140);            
            ul.find("li:last").after(ul.find("li:first"));
            ul.stop(true,true).animate({"margin-left":"-330px"});
            if(gi.find(".dot span.choose").index()<l-1){
                gi.find(".dot span").eq(gi.find(".dot span.choose").index()+1).addClass("choose").siblings().removeClass("choose");
                gi.find("h4 em").html(gi.find(".dot span.choose").index()+1);
            }else {
                gi.find(".dot span").eq(0).addClass("choose").siblings().removeClass("choose");
                gi.find("h4 em").html(1);
            }
        } else if (line < -100) {
            var index=index=ul.find(".scale1").index();
            ul.find("li:first").before(ul.find("li:last"));
            ul.css("margin-left",-800);            
            ul.find("li").eq(index).addClass("scale1").siblings().removeClass("scale1");
            ul.stop(true,true).animate({"margin-left":"-330px"});
            if(gi.find(".dot span.choose").index()>0){
                gi.find(".dot span").eq(gi.find(".dot span.choose").index()-1).addClass("choose").siblings().removeClass("choose");
                gi.find("h4 em").html(gi.find(".dot span.choose").index()+1);
            }else {
                gi.find(".dot span").eq(l-1).addClass("choose").siblings().removeClass("choose");
                gi.find("h4 em").html(l);
            }
        }
    }
}
