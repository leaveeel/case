var arr = [5,6,4,2,9,7,3,0]
function quick(arr,begin,end){
    if(begin >= end) return;
    let l=begin,r=end,temp=arr[begin]
    while(l < r) {
        while(l < r && arr[r] >= temp) r--;
        while(l < r && arr[l] <= temp) l++;
        [arr[l],arr[r]]=[arr[r],arr[l]]
    }
    [arr[begin],arr[l]]=[arr[l],arr[begin]]
    quick(arr,begin,r-1)
    quick(arr,l+1,end)
}
quick(arr,0,arr.length-1)
console.log(arr)
