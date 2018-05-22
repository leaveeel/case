//分享到qq空间 手机端
function shareTo(url,title,pic) {
    if($(this).hasClass("wb")){
        var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl=&pic='+pic;
        window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
    }
    if($(this).hasClass("qq")){
        var sharesinastring='http://connect.qq.com/widget/shareqq/index.html?title='+title+'&url='+url+'&content=utf-8&sourceUrl=&pics='+pic;
        window.open(sharesinastring, '分享到QQ好友', 'height=400,width=400,top=100,left=100');
    }
    if($(this).hasClass("qz")){
    	var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=&title='+title+'&url='+url+'&pic='+pic;
        window.open(shareqqzonestring,'newwindow','height=400,width=400,top=100,left=100');
    }
}
