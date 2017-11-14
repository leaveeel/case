var n="123123123";
var len=n.length;
if(len==11){
    n=n.substring(0,3)+"****"+n.substring(7,11)
}else{
    n=n.substring(0,3)+"***"+n.substring(len-2,len)
}
