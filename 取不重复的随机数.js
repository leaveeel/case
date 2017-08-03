function num(n,min,max){//参数对应 （获取数量，最小index，最大index）
    var arr=[];
    for(i=0;i<n;i++){
        arr[i]=parseInt(Math.random()*(max-min+1)+min);
        for(j=0;j<i;j++){
            if(arr[i]==arr[j]){
                i=i-1;
                break;
            }
        }
    }
    return arr;
}
var a=num(5,0,139)
for(var i=0;i<5;i++){
    console.log(a[i]);
}
