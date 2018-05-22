function GetQueryString(name) { 
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");//&或 开始到下一个&或结束
  var r = window.location.search.substr(1).match(reg);//从问号开始匹配获得?以后的字符串，验证正则取得参数  e.g. http://www.github.com/leaveeel/case?name=leaveeel&year=2018&status=work，先通过window.location.search.substr(1)取得name=leaveeel&year=2018&status=work，后通过.match(reg)验证name字段，得到name=leaveeel&,,leaveeel,&
  var context = "";
  if (r != null) 
     context = r[2]; 
    //释放内存
  reg = null; 
  r = null; 
  return context == null || context == "" || context == "undefined" ? "" : context; 
}
