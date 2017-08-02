$('input').bind('click',function(e){
    var $this = $(this);
    e.preventDefault();
    setTimeout(function(){
        $(window).scrollTop($this.offset().top - 10);
    },200);
});
