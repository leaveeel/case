//疑问1：能否利用参数自动改变.scrollLeft()/.scrollTop()

var scr =function(a,b,c,d){
	$(a).find(c).first().before($(a).find(c).last());
	if(d=="left"){
		var z = $(a).find(c).width();
		$(a).scrollLeft(b+z);
		$(a).scroll(function(){
				if($(a).scrollLeft()>(z+b)){
					$(a).find(c).last().after($(a).find(c).first());
					$(a).scrollLeft(b);
				}else if($(a).scrollLeft()==0){
					$(a).find(c).first().before($(a).find(c).last());
					$(a).scrollLeft(z)
				}
		})
	}else if(d=="top"){
		var z = $(a).find(c).height();
		$(a).scrollTop(b+z);
		$(a).scroll(function(){
			if($(a).scrollTop()>(z+b)){
				$(a).find(c).last().after($(a).find(c).first());
				$(a).scrollTop(b);
			}else if($(a).scrollTop()==0){
				$(a).find(c).first().before($(a).find(c).last());
				$(a).scrollTop(z)
			}
		})
	}
}
//scr("scroll元素",偏移量,"内部单个元素","方向");
