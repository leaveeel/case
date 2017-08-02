# tips

1.ie8不支持符号开头类名
2.ie8某些情况不支持空a标签 (e.g. div>img+a) 可以将img作为div背景
3.移动端键盘遮挡input可用以下代码
    $('input').bind('click',function(e){
        var $this = $(this);
        e.preventDefault();
        setTimeout(function(){
            $(window).scrollTop($this.offset().top - 10);
        },200)
    });
4.父元素display:none后js无法读取内部自适应子元素的宽高属性 可以用visibility:hidden替代;
5.京东商城店铺装修css类名需要添加.user前缀(e.g. .head>.userHead) 每一块布局的css样式全局适用;
6.APP嵌入h5页面会有js点击事件无效的问题, 可将点击对象换城 a 或者 button 标签, 或添加样式cursor: pointer;
7.jQuery控制延迟隐藏 $("div").delay(2000).hide(0); //hide里0 否则无效;
8.sort()排序数组仅可排序原有数组，动态添加的无法排序，可用冒泡方法排序，方法见case内漏斗图冒泡.html；
9.延迟执行function可以用setTimeout("function",second)实现;//e.g. setTimeout("alert('10s')",10000)
10.键盘动作可以用以下代码
    $("body").keyup(function(e) { //触发按键的元素
        e = window.event || e;
        if (e.keyCode && e.keyCode == 37) { //键值 ASCII
            $(selector).click(); //执行动作
        }
    });