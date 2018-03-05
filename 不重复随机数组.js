function fn(n,min,max){
    if(n>min && n<max && !isNaN(n)){
        var arr=[];
        for(var i=0;i<n;i++){
            arr[i]=parseInt(Math.random()*(max-min+1)+min);
            //验证如果重复，重新随机arr[i]
            for(j=0;j<i;j++){
                if(arr[i]==arr[j]){
                    i=i-1;
                    break;
                }
            }
        }
        return arr;
    }else if(n<min || n>max){
        console.log("n error");
    }else if(isNaN(n)){
        console.log("n not num");
    }
}
fn(4.007,2,32)
