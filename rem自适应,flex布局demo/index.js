var deviceWidth = parseInt(window.screen.width);
$("html").css({"font-size":deviceWidth/7.5});

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
        w   = $(".detail_box li").width() + 10 ;
    $(".detail_box").width( len* w );
}

$.getJSON("/index", function(data){  
    $.each(data, function(i, item){
        $(".detail_box").append('<li><img src="img/d_pic' + item.num + '.png" /><span class="db"><text>' + item.text + '</text><i>' + item.price +'</i></span></li>');
    });
    casefun();
});
