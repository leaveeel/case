var deviceWidth = parseInt(window.screen.width);
$("html").css({"font-size": deviceWidth / 12.42});
window.onresize = function(){
    var screenWidth = parseInt(window.screen.width);
    $("html").css({"font-size": screenWidth / 12.42});
}
var startX, endX;
document.getElementById("touch_icon").addEventListener("touchstart", touchStart, false);
document.getElementById("touch_icon").addEventListener("touchend", touchEnd, false);
function touchStart(event) {
    var touch = event.touches[0];
    if (parseInt($(".touchicon").css('left')) <= 0) {
        startX = touch.pageX / (deviceWidth / 12.42) - .73;
        document.getElementById("touch_icon").addEventListener("touchmove", touchMove, false);
    }else {
        document.getElementById("touch_icon").removeEventListener("touchmove", touchMove, false);
    }
}
function touchMove(event) {
    var touch = event.touches[0];
    endX = touch.pageX / (deviceWidth / 12.42) - .73;
    if(endX - startX <0) {
        $(".line").animate({"width":0}, 200);
        $(".touchicon").animate({"left": '-.02rem'}, 200);
    }else if(endX - startX > 9.5) {
        $(".line").width("100%");
        $(".touchicon").css('left', '9.5rem');
    }else {
        if(endX > 0) {
            $(".line").width((endX - startX + 1.46) + 'rem');
            $(".touchicon").css('left', (endX - startX) + 'rem');
        }
    }
}
function touchEnd(event) {
    var line = startX - endX;
    if ($('.line').width() / (deviceWidth / 12.42) > 10.9) {
        $(".line").width("100%");
        $(".touchicon").css('left', '9.5rem');
        if(!$('#touch_test').hasClass('tigger')) {
            $('#touch_test').addClass('tigger');
            alert(1)
        }
    }else {
        $(".line").animate({"width":0}, 200);
        $(".touchicon").animate({"left": '-.02rem'}, 200);
    }
}
