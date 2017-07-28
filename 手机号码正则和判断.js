function phone(s) {
    var pRE = /^1[34578]\d{9}$/;
    if (!pRE.exec(s)) return false
        return true
}

if(!phone(s)){
    //不满足
}else{
    //满足
}

//.exec()  判断字符串是否符合正则
