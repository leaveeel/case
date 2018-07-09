var screenWidth = parseInt(window.screen.width);
$("html").css({"font-size":screenWidth/7.5});
window.onresize = function(){
    var screenWidth = parseInt(window.screen.width);
    $("html").css({"font-size":screenWidth/7.5});
}
