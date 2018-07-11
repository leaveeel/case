var a, b, c;
function control (e) {
    //增加删除类名
    function toggleClass (obj, cls) {
        //检索类名
        if (!obj.className.match(cls)) {
            //防止有其他类名被替换，此处用自增不用replace
            obj.className += ' ' + cls;
        }else {
            //控制类名替换为空
            obj.className = obj.className.replace(' ' + cls, '');
        }
    }
    toggleClass(e, 'positive');
    var $span = document.getElementById(c).getElementsByTagName('span'),
        ai = parseInt(e.getAttribute("ai")),
        si = parseInt(e.parentNode.getAttribute("si")),
        win = new Array();
    //判断给周围哪个元素加上标记，顺序为上右下左
    if ( si - a >= 0) {
        for (var i = 0; i < a; i++) {
            toggleClass($span[si - i - 1].getElementsByTagName('a')[ai], 'positive');
        }
    }else {
        for (var i = 0; i < si; i++) {
            toggleClass($span[si - i - 1].getElementsByTagName('a')[ai], 'positive');
        }
    }
    if ( ai + a < b) {
        for (var i = 0; i < a; i++) {
            toggleClass(e.parentNode.getElementsByTagName('a')[ai + i + 1], 'positive');
        }
    }else {
        for (var i = 0; i < b - ai - 1; i++) {
            toggleClass(e.parentNode.getElementsByTagName('a')[ai + i + 1], 'positive');
        }
    }
    if ( si + a < b) {
        for (var i = 0; i < a; i++) {
            toggleClass($span[si + i + 1].getElementsByTagName('a')[ai], 'positive');
        }
    }else {
        for (var i = 0; i < b - si - 1 ; i++) {
            toggleClass($span[si + i + 1].getElementsByTagName('a')[ai], 'positive');
        }
    }
    if ( ai - a >= 0) {
        for (var i = 0; i < a; i++) {
            toggleClass(e.parentNode.getElementsByTagName('a')[ai - i - 1], 'positive');
        }
    }else {
        for (var i = 0; i < ai; i++) {
            toggleClass(e.parentNode.getElementsByTagName('a')[ai - i - 1], 'positive');
        }
    }
    //添加判断获胜条件，用数组和数组内容数量控制;
    for (var w = 0; w < document.getElementsByTagName('a').length; w++) {
        if (document.getElementsByTagName('a')[w].className.match('positive')) {
            win.push(w);
        }
    }
    if (win.length === (b*b)) {
        alert('win!');
    }
}
function game(arm, size, game) {//臂长，行，列，dom
    a = arm;
    b = size;
    c = game;
    var width = 1 / size * window.screen.width,
        shtm='',
        ahtm='',
        dom = document.getElementById(game);
    //窗口大小变化时动态缩放，可以不用
    window.onresize = function () {
        width = 1 / size * window.screen.width;
        for (var i = 0; i < dom.getElementsByTagName('a').length; i++) {
            dom.getElementsByTagName('a')[i].style.width = width + 'px';
            dom.getElementsByTagName('a')[i].style.height = width + 'px';
        }
    }
    //填充界面
    for (var j = 0; j < size; j++) {
        ahtm += '<a ai="' + j + '" onclick="control(this)"></a>';
    }
    for(var i=0; i < size; i++){
        shtm += '<span class="df" si="' + i + '">' + ahtm + '</span>';
    }
    dom.innerHTML = shtm;
    for (var i = 0; i < dom.getElementsByTagName('a').length; i++) {
        dom.getElementsByTagName('a')[i].style.width = width + 'px';
        dom.getElementsByTagName('a')[i].style.height = width + 'px';
    }
}
