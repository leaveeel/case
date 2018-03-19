function num(n,min,max,maxlength){//参数对应 （获取数量，最小index，最大index）
    var arr=[];
    for(i=0;i<n;i++){
        arr[i]=parseInt(Math.random()*(max-min+1)+min);
        //补0
        //先计算位数再补0  
//        var length=arr[i].toString().length;//随机数位数
//        if(length<maxlength){
//			arr[i]=Array((maxlength+1)-arr[i].toString().length).join('0') + arr[i];
//		}
        //先补0截取位数
//        arr[i]="000000"+arr[i];
//        arr[i]=arr[i].substr(-6);

        for(j=0;j<i;j++){
            if(arr[i]==arr[j]){
                i=i-1;
                break;
            }
        }
    }
    return arr;
}
var a=num(5,0,999999,6)
for(var i=0;i<5;i++){
    console.log(a[i]);
}
