function game(arm, size, $game) {//臂长，行，列，dom
    $game.html('');
    //填充界面
    var width = 1/size * window.screen.width,
        shtm='',
        ahtm='';
    window.onresize = function () {
        width = 1/size * window.screen.width;
        $game.find('a').css({'width': width, 'height': width});
    }
    for (var j = 0; j < size; j++) {
        ahtm +='<a></a>';
    }
    for (var i = 0; i < size; i++) {
        shtm += '<span class="df">' + ahtm + '</span>';
    }
    $game.append(shtm);
    $game.find('a').css({'width': width, 'height': width});
    //
    //
    $game.find('a').click(function () {
        $(this).toggleClass("positive");
        var $span = $(this).parents('#gamebox').find('span'),
            ai = $(this).index(),
            li = $(this).parent().index(),
            win = [];
        if ( li - arm >= 0) {
            for (var i = 0; i < arm; i++) {
                $span.eq(li - i - 1).find('a').eq(ai).toggleClass("positive");
            }
        }else {
            for (var i = 0; i < li; i++) {
                $span.eq(li - i - 1).find('a').eq(ai).toggleClass("positive");
            }
        }
        if ( ai + arm < size) {
            for (var i = 0; i < arm; i++) {
                $(this).parent().find('a').eq(ai + i + 1).toggleClass("positive");
            }
        }else {
            for (var i = 0; i < size - ai - 1; i++) {
                $(this).parent().find('a').eq(ai + i + 1).toggleClass("positive");
            }
        }
        if ( li + arm < size) {
            for (var i = 0; i < arm; i++) {
                $span.eq(li + i + 1).find('a').eq(ai).toggleClass("positive");
            }
        }else {
            for (var i = 0; i < size - li - 1 ; i++) {
                $span.eq(li + i + 1).find('a').eq(ai).toggleClass("positive");
            }
        }
        if ( ai - arm >= 0) {
            for (var i = 0; i < arm; i++) {
                $(this).parent().find('a').eq(ai - i - 1).toggleClass("positive");
            }
        }else {
            for (var i = 0; i < ai; i++) {
                $(this).parent().find('a').eq(ai - i - 1).toggleClass("positive");
            }
        }
        $("span a").each(function () {
            if ($(this).hasClass('positive')) {
                win.push('win');
            }
        });
        if (win.length === (size*size)) {
            alert('win!');
        }
    });
}
