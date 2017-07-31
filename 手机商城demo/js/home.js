//banner
var banner_l = $(" .banner ul li").length;
$(" .banner ul").css("width",banner_l * 750);
$(" .banner span p em").text(banner_l);
var i_num = parseInt($(".banner span i").text());
$(" .banner ul li").first().before($(" .banner ul li").last());
$(" .banner ul").css({marginLeft:-750});
//定时器
fun1 = function(){
    if(i_num<banner_l){
        i_num = i_num+1
    }else{
        i_num=1;
    }
    $(".banner span i").text(i_num);
    $(" .banner ul").stop().animate({marginLeft:"-=750"},500,function(){
        $(".banner ul li:last").after($(" .banner ul li:first"));
        $(".banner ul").css({marginLeft:-750});
    })
}
var t = setInterval(fun1,3000);
//banner touch事件
var startX, endX;
var showADID = 1;
document.getElementById("banner").addEventListener("touchstart",touchStart,false);
document.getElementById("banner").addEventListener("touchmove",touchMove,false);
document.getElementById("banner").addEventListener("touchend",touchEnd,false);
function touchStart(event){
    var touch = event.touches[0];
    startY=touch.pageY;
    startX=touch.pageX;
    clearInterval(t);
}
function touchMove(event){
    var touch = event.touches[0];
    endX = touch.pageX;
}
function touchEnd(event){
    var line = startX-endX;
    if(line>100){
        if(i_num<banner_l){
            i_num = i_num+1
        } else{
            i_num=1;
        }
        $(".banner span i").text(i_num);
        $(".banner ul").stop(true,true).animate({marginLeft:"-=750px"},500,function(){
            $(".banner ul li:last").after($(".banner ul li:first"));
            $(".banner ul").css({marginLeft:-750});
        });
    }else if(line<-100){
        if(i_num>1){
            i_num = i_num-1
        }else{
            i_num=banner_l;
        }
        $(".banner span i").text(i_num);
        $(".banner ul").stop(true,true).animate({marginLeft:"+=750px"},500,function(){
            $(" .banner ul li:first").before($(" .banner ul li:last"));
            $(" .banner ul").css({marginLeft:-750});
        });
    }
    t=setInterval(fun1,3000);
}
//导航滑动事件
$(".list li").first().before($(".list li").last());
$(".listbox").scrollLeft(377.5);
$(".listbox").scroll(function() {
    if($(".listbox").scrollLeft()>=(459+377.5)){
        $(".list li").last().after($(".list li").first());
        $(".listbox").scrollLeft(377.5);
    }else if($(".listbox").scrollLeft()==0){
        $(".list li").first().before($(".list li").last());
        $(".listbox").scrollLeft(459);
    }
    for(i=0;i<4;i++){
        if($(".assessment").index()==(i)){
            $(".listtxt li").eq(-(i-1)).addClass("choose").siblings().removeClass("choose");
        };
    }
});
//导航点击事件
/*$(".listtxt li").click(function(){
    var liindex = $(this).index();
    var eqindex = $(this).index()+1;
    if(eqindex==4){
        eqindex = 0;
    }
//	if($(".listtxt li").eq(eqindex).hasClass("choose")){
//		$(this).addClass("choose").siblings().removeClass("choose");
//		$(".listbox").stop().animate({scroll:-459},500,function(){
//			$(".list li:first").before($(".list li:last"));
//			$(".listbox").scrollLeft(-377.5);
//		});
//	}else{
//		$(this).addClass("choose").siblings().removeClass("choose");
        if(liindex==0){
            var liname = $(".list .train");
        } else if(liindex==1){
            var liname = $(".list .assessment");
        } else if(liindex==2){
            var liname = $(".list .recover");
        } else if(liindex==3){
            var liname = $(".list .join");
        }
        var bb= $(".listtxt li.choose").index();
        var m=liindex-bb;
        console.log(m)
        if(m>0){
            $(".listbox").stop().animate({scrollLeft:"+="+(459*m)},500,function(){
                var i = liname.index();
                for(var x=0;x<i;x++){
                    $(".list li").last().after($(".list li").first());
                }
                $(".listbox").scrollLeft(377.5);
            });
        }
//	}
});*/
//内容
$(".goodsclass").last().css("margin",0);
var goodsli_w = $(".goodsclass ul li").width() + 35;
var bagsli_l = $(".bags ul li").length;
var watchli_l = $(".watch ul li").length;
var diamondli_l = $(".diamond ul li").length;
var jewelryli_l = $(".jewelry ul li").length;
var digitalli_l = $(".digital ul li").length;
$(".bags ul").css("width",goodsli_w * bagsli_l);
$(".watch ul").css("width",goodsli_w * watchli_l);
$(".diamond ul").css("width",goodsli_w * diamondli_l);
$(".jewelry ul").css("width",goodsli_w * jewelryli_l);
$(".digital ul").css("width",goodsli_w * digitalli_l);
//底部导航
var i_c = $("footer ul li")
i_c.children(".choose").hide();
i_c.eq(0).children(".choose").show().siblings("i").hide();
i_c.click(function(){
    $(this).children("i").hide().siblings("i.choose").show();
    $(this).addClass("click").siblings().removeClass("click").children("i").show().siblings("i.choose").hide();
});
if(i_c.hasClass("click")){
    $(this).children("i").hide().siblings("i.choose").show();
}else {
    $(this).children("i.choose").hide().siblings("i").show();
}
