var showappr=0;
function next(){
    for(var i=showappr;i<showappr+5;i++){//每页显示五条
        $(".appr ul li").eq(i).show();
    }
    showappr=showappr+5;
}
next();
function prev(){
    for(var i=showappr-10;i<showappr-5;i++){
        $(".appr ul li").eq(i).show();
    }
    showappr=showappr-5;
}
$(".appr .nex").click(function(){
    if(showappr<=$(".appr ul li").length){
        $(".appr ul li").hide();
        next();
        $(".appr .pre").removeClass("end");
        if(showappr>=$(".appr ul li").length){
            $(this).addClass("end");
        }
    }
});
$(".appr .pre").click(function(){
    if(showappr>5){
        $(".appr ul li").hide();
        prev();
        $(".appr .nex").removeClass("end");
        if(showappr==5){
            $(this).addClass("end");
        }
    }
});
