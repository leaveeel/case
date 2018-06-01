//提示消息内容
var arr = [
    {t:'pink'},
    {t:'orang'},
    {t:'green'},
    {t:'grey'},
    {t:'blue'},
    {t:'yellow'},
    {t:'red'},
    {t:'sky'}
];
var arrlen = arr.length;
var rotate = {
    //角度
    round_deg : 0, 
    enable : true, 
    turn:function(index){
        var self = this,
            ring = 2,//圈
            time = 1,//转动时间
            index_deg = index * 45;//选中的奖品所在角度

        self.enable = false;//禁用点击
        self.round_deg =  self.round_deg - ring * 360 - self.round_deg % 360 - index_deg;//本身角度-圈数-复原到原点还需角度-奖品角度
        $('.plate').css({
            'transform': 'rotate('+self.round_deg+'deg)',
            '-ms-transform': 'rotate('+self.round_deg+'deg)',
            '-webkit-transform': 'rotate('+self.round_deg+'deg)',
            '-moz-transform': 'rotate('+self.round_deg+'deg)',
            '-o-transform': 'rotate('+self.round_deg+'deg)',
            'transition': 'transform ease-out '+time+'s',
            '-moz-transition': '-moz-transform ease-out '+time+'s',
            '-webkit-transition': '-webkit-transform ease-out '+time+'s',
            '-o-transition': '-o-transform ease-out '+time+'s'
        });
        setTimeout(function(){
            self.enable = true;//转完后启用点击
            console.log(index)
            console.log(arr[index].t);//返回值
        },time*1000);
    }
}
$(document).ready(function(){
    $('.btn').click(function(){
        if(rotate.enable){
            rotate.turn(Math.floor(Math.random() * arrlen));
        }
    });
});
