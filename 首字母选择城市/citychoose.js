$(function(){
    //初始
    $(".showpage .city ul li").eq(0).addClass("choose");
    //展示页城市按拼音排序
    var a1=[];
    for(var i=0;i<$(".showpage .city ul li").length;i++){
        a1.push($(".showpage .city ul li").eq(i).html());
    }
    a1.sort(function compareFunction(param1, param2) {
        return param1.localeCompare(param2,"zh");
    });
    for(var i=0;i<$(".showpage .city ul li").length;i++){
        $(".showpage .city ul li").eq(i).html(a1[i]);
    }
    //动态修改宽度
    var ecuw=0;
    for(var i=0;i<$(".showpage .city ul li").length;i++){
        ecuw=ecuw+$(".showpage .city ul li").eq(i).width()+68;
    }
    $(".showpage .city ul").width(ecuw);
    //选择
    $(".showpage .city ul li").click(function(){
        $(this).addClass("choose").siblings().removeClass("choose");
        console.log($(this).index());
        //展示页滚动到相应位置
        var index=$(this).index(),
            sl=0;
        for(var i=0;i<index;i++){
            sl=sl+$(".showpage .city ul li").eq(i).width()+68;
        }
        $(".showpage .city").animate({scrollLeft: sl+'px'}, 0);
    });
    //更多
    $(".showpage .nav .more").click(function(){
        $(".choosecity").removeClass("dn").siblings(".showpage").addClass("dn");
        //加载函数
        initials();
        //初始化位置
        $(".initials ul li").eq(0).addClass("show").siblings().removeClass("show");
        $(".choosecity .sort_list").eq(0).addClass("click").siblings().removeClass("click");
        $('html,body').animate({scrollTop: '0px'}, 0);
        //右侧字母选择
        var index=0;
        $(".initials ul li").click(function(){
            index=$(this).index();
            $(this).addClass("show").siblings().removeClass("show");
            $('#letter').html($(this).html()).fadeIn();
            setTimeout(function(){
                $('.initials').css('background','rgba(145,145,145,0)');
                $('#letter').fadeOut();
            },1000);
            //滚动到相应位置
            if($(this).index()==0){
                $('html,body').animate({scrollTop: '0px'}, 0);
            }else{
                var letter = $(this).text();
                if($('#'+letter).length>0){
                    var LetterTop = $('#'+letter).position().top;
                    $('html,body').animate({scrollTop: LetterTop-92+'px'}, 0);
                }
            }
        });
        //滚动事件
        $(window).scroll(function(){
            if(!$(".choosecity").hasClass("dn")){
                //部分浏览器和app有下拉搜索功能，scrolltop为负值有异常
                if($(document).scrollTop()>0){
                    if($(".choosecity .sort_box .sort_letter").eq(index).offset().top<=$(document).scrollTop()){
                        index++;
                        $(".initials ul li").eq(index).addClass("show").siblings().removeClass("show");
                    }
                    if($(".choosecity .sort_box .sort_letter").eq(index).offset().top>$(document).scrollTop()+92){
                        index--;
                        $(".initials ul li").eq(index).addClass("show").siblings().removeClass("show");
                    }
                }
            }
        });
        $(".choosecity .sort_list").click(function(){
            $(this).addClass("click").siblings(".choosecity .sort_list").removeClass("click");
        });
    });
    //确定
    $(".choosecity .sure").click(function(){
        $('html,body').animate({scrollTop: '0px'}, 0);
        $(".showpage").removeClass("dn").siblings(".choosecity").addClass("dn");
        //清空函数加入的数据
        $(".choosecity .initials ul").children().remove();
        $(".choosecity #letter").children().remove();
        //展示页根据选择城市滚动到相应位置
        var v=$(".choosecity .sort_box .click input").val();
        ci=$(".showpage .nav .city input[value="+v+"]").parent().index();
        sl=0;
        console.log(ci);
        $(".showpage .nav .city li").eq(ci).addClass("choose").siblings().removeClass("choose");
        for(var i=0;i<ci;i++){
            sl=sl+$(".showpage .city ul li").eq(i).width()+68;
        }
        $(".showpage .city").animate({scrollLeft: sl+'px'}, 0);
    });
});

function initials() {
    //选择城市页城市排序
    var SortList2=$(".choosecity .sort_list");
    var a1=[];
    for(var i=0;i<$(".choosecity .sort_list").length;i++){
        a1.push($(".choosecity .sort_list").eq(i).find(".num_name").html());
    }
    a1.sort(function compareFunction(param1, param2) {
        return param1.localeCompare(param2,"zh");
    });
    for(var i=0;i<$(".choosecity .sort_list").length;i++){
        $(".choosecity .sort_list").eq(i).find(".num_name").html(a1[i]);
    }
    //遍历获得数据包含的所有首字母并添加到相应位置
    var initials = [];
    var num=0;
    SortList2.each(function(i) {
        var initial = makePy($(this).find('.num_name').text().charAt(0))[0].toUpperCase();
        if(initial>='A'&&initial<='Z'){
            if (initials.indexOf(initial) === -1)
                initials.push(initial);
        }else{
            num++;
        }
    });
    initials.sort(function compareFunction(param1, param2) {
        return param1.localeCompare(param2,"zh");
    });
    $.each(initials, function(index, value) {
        //跳转用标记
        $(".choosecity .sort_box").append('<div class="sort_letter" id="'+ value +'"></div>');
        //选择城市页右侧字母
        $(".initials ul").append('<li>'+value+'</li>');
    });
    //居中显示
    $(".initials").css({"margin-top":-$(".initials ul li").length*42/2});
    //将城市按首字母添加到首字母后
    for (var i =0;i<SortList2.length;i++) {
        //获取首字母
        var letter=makePy(SortList2.eq(i).find('.num_name').text().charAt(0))[0].toUpperCase();
        switch(letter){
            case "A":
                $('#A').after(SortList2.eq(i));
                break;
            case "B":
                $('#B').after(SortList2.eq(i));
                break;
            case "C":
                $('#C').after(SortList2.eq(i));
                break;
            case "D":
                $('#D').after(SortList2.eq(i));
                break;
            case "E":
                $('#E').after(SortList2.eq(i));
                break;
            case "F":
                $('#F').after(SortList2.eq(i));
                break;
            case "G":
                $('#G').after(SortList2.eq(i));
                break;
            case "H":
                $('#H').after(SortList2.eq(i));
                break;
            case "I":
                $('#I').after(SortList2.eq(i));
                break;
            case "J":
                $('#J').after(SortList2.eq(i));
                break;
            case "K":
                $('#K').after(SortList2.eq(i));
                break;
            case "L":
                $('#L').after(SortList2.eq(i));
                break;
            case "M":
                $('#M').after(SortList2.eq(i));
                break;
            case "N":
                $('#N').after(SortList2.eq(i));
                break;
            case "O":
                $('#O').after(SortList2.eq(i));
                break;
            case "P":
                $('#P').after(SortList2.eq(i));
                break;
            case "Q":
                $('#Q').after(SortList2.eq(i));
                break;
            case "R":
                $('#R').after(SortList2.eq(i));
                break;
            case "S":
                $('#S').after(SortList2.eq(i));
                break;
            case "T":
                $('#T').after(SortList2.eq(i));
                break;
            case "U":
                $('#U').after(SortList2.eq(i));
                break;
            case "V":
                $('#V').after(SortList2.eq(i));
                break;
            case "W":
                $('#W').after(SortList2.eq(i));
                break;
            case "X":
                $('#X').after(SortList2.eq(i));
                break;
            case "Y":
                $('#Y').after(SortList2.eq(i));
                break;
            case "Z":
                $('#Z').after(SortList2.eq(i));
                break;
        }
    };
}
