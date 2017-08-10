//上面注释掉的是找到的js,有在滚动时无法重置定时器的bug;
//下面使用setTimeout控制滚动停止事件，解决了上面的问题，但无法控制开始事件；
/*
var topValue = 0,// 上次滚动条到顶部的距离  
    interval;// 定时器  
document.onscroll = function() {  
    console.log("滚动");
    if(interval == null)// 未发起时，启动定时器  
        interval = setInterval(test, 5000);
    topValue = document.documentElement.scrollTop;  
}  

function test() {  
// 判断此刻到顶部的距离是否和1秒前的距离相等  
    if(document.documentElement.scrollTop == topValue) {  
        alert("停止");
        clearInterval(interval);  
        interval = null;  
    }
}*/
function t5(){
    alert("停止");
}
var lrhide=setTimeout(t5,5000);
document.onscroll = function(){
    clearTimeout(lrhide);
    console.log("滚动");
    lrhide=setTimeout(t5,5000);
}
