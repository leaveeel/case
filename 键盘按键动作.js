$("body").keyup(function(e) { //触发按键的元素
    e = window.event || e;
    if (e.keyCode && e.keyCode == 37) { //键值 ASCII
        $(selector).click(); //执行动作
    }
});
