//动态更改比例，e.g. 此demo按750px设计图100px根字号画的，比例为7.5（100 = 750 / 7.5），∴html{font-size} = 屏幕宽度 / 7.5；
var deviceWidth = parseInt(window.screen.width);
$("html").css({"font-size":deviceWidth/7.5});
window.onresize = function(){
    var screenWidth = parseInt(window.screen.width);
    $("html").css({"font-size":screenWidth/7.5});
}

function banner(){
    var len = $(".banner_box a").length,
        w   = $(".banner_box a").width();
    if( parseInt( $(".banner_box").css("margin-left") ) > -(len-1)*w ){
        $(".banner_box").stop(true,true).animate({ "margin-left" : "-=" + w });
    }else {
        $(".banner_box").stop(true,true).animate({ "margin-left" : 0 });
    }
}
var t1=setInterval("banner()",3000);
function casefun(){
    var len = $(".detail_box li").length,
        //w   = $(".detail_box li").width() + 10 ;//js中尽量不使用px单位，间距用margin或padding在css中设置；
        m   = parseInt($(".detail_box li").css("margin-left")) + parseInt($(".detail_box li").css("margin-right")),
        w   = $(".detail_box li").width() + m;
    $(".detail_box").width( len * w );
}
//本地跨域，需要在服务器运行；
$.getJSON("/index", function(data){  
    $.each(data, function(i, item){
        $(".detail_box").append('<li><img src="img/d_pic' + item.num + '.png" /><span class="db"><text>' + item.text + '</text><i>' + item.price +'</i></span></li>');
    });
    casefun();
});

function aside(){
    $("aside").show();
}
var delay_show;
$(window).scroll(function(){
    clearTimeout(delay_show);
    $("aside").hide();
    delay_show = setTimeout(aside,1000);
});
