var startX, endX;//起止横坐标
document.getElementById("showTagId").addEventListener("touchstart", touchStart, false);//showTagId = 展示标签ID  E.g.  div#showTagId>ul>li*n
document.getElementById("showTagId").addEventListener("touchmove", touchMove, false);
document.getElementById("showTagId").addEventListener("touchend", touchEnd, false);
function touchStart(event) {//触摸开始时事件
    var touch = event.touches[0];
    //startY = touch.pageY;//获取起始Y坐标
    startX = touch.pageX;//获取起始X坐标
}
function touchMove(event) {//滑动时时间
    var touch = event.touches[0];
    //endY = touch.pageY;//获取终止坐标
    endX = touch.pageX;//获取终止X坐标
}
function touchEnd(event) {//触摸结束时事件
    var line = startX - endX;
    if (line > 100) {//从右向左滑动
      function;
    } else if (line < -100) {//从左往右滑动
      function;
    } 
}
