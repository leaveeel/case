//连接数组
function concat(){
    const arr1=[1,2,3]
    const arr2=[4,5]
    const arr3=arr1.concat(arr2)
    console.log(arr1)//[1,2,3]
    console.log(arr3)//[1,2,3,4,5]
}
//将数组元素合并成字符串，默认用,连接
function join(){
    const arr=[2,3,4]
    console.log(arr.join())//2,3,4
    console.log(arr)//[2,3,4]
}
//向尾添加
function push(){
    const a=[2,3,4]
    const b=a.push(5)
    console.log(a)//[2,3,4,5]
    console.log(b)//4
}
//删除返回最后一个元素
function pop(){
    const arr=[2,3,4]
    console.log(arr.pop())//4
    console.log(arr)//[2,3]
}
//删除返回第一个元素
function shift(){
    const arr=[2,3,4]
    console.log(arr.shift())//2
    console.log(arr)//[3,4]
}
//向头添加
function unshift(){
    const arr=[2,3,4,5]
    console.log(arr.unshift(3,6))//6
    console.log(arr)//[3,6,2,3,4,5]
}
//返回[m,n)下标的数组，不改变原数组
function slice(){
    const arr=[2,3,4,5]
    console.log(arr.slice(1,3))//[3,4]
    console.log(arr)//[2,3,4,5]
}
//(index,m,n)删除从index开始的n个元素，添加m元素，m可选
function splice(){
    const a=[5,6,7,8]
    console.log(a.splice(1,0,9))//[]
    console.log(a)//[5,9,6,7,8]
    const b=[5,6,7,8]
    console.log(b.splice(1,2,3))//[6,7]
    console.log(b)//[5,3,8]
}
//(index,n)截取从index开始的n个字符串，n默认为-1
function substr(){
    const str='1234567890'
    console.log(str.substr(2))//3456789
    console.log(str.substr(2,5))//34567
}
//(index,n)截取[index,n)的字符串，n默认为-1
function substring(){
    const str='1234567890'
    console.log(str.substring(2))//3456789
    console.log(str.substring(2,5))//345
}
//升序排序
function sort(){
    const fruit=['cherries','apples','bananas']
    console.log(fruit.sort())//['apples','bananas','cherries']
    const scores=[1,10,21,2]
    console.log(scores.sort())//[1,10,2,21]
}
//反排序
function reverse(){
    const arr=[2,3,4]
    console.log(arr.reverse())//[4,3,2]
    console.log(arr)//[4,3,2]
}
//(m,n)从n开始查找m的位置
function indexOf(){
    const a=[2,9,9]
    console.log(a.indexOf(2))//0
    console.log(a.indexOf(7))//-1
}
//(m,n)从n开始逆向查找m的位置
function lastIndexOf(){
    const numbers=[2,5,9,2]
    console.log(numbers.lastIndexOf(2))//3
    console.log(numbers.lastIndexOf(7))//-1
    console.log(numbers.lastIndexOf(2,3))//3
    console.log(numbers.lastIndexOf(2,2))//0
    console.log(numbers.lastIndexOf(2,-2))//0
    console.log(numbers.lastIndexOf(2,-1))//3
}
//对每项进行与判断
function every(){
    function en(element,index,array){
        return element<10
    }
    const arr=[2,5,8,3,4]
    arr.every(en)//true
}
//对每项进行或判断
function some(){
    function en(element,index,array){
        return element>10
    }
    const arr1=[2,5,8,1,4]
    const arr2=[12,5,8,1,4]
    arr1.some(en)//false
    arr2.some(en)//true
}
//将判断为true的项组成数组
function filter(){
    const words=['spray','limit','elite','exuberant','destruction','present','happy']
    const longw=words.filter(function(word){
        return word.length>6
    })
    console.log(longw)//['exuberant','destruction','present']
}
//将每项运行结果组成数组
function map(){
    const numbers=[1,5,10,15]
    const doubles=numbers.map(function(x){
        return x*2
    })
    console.log(doubles)//[2,10,20,30]
    console.log(number)//[1,5,10,15]
}
//遍历
function forEach(){
    const items=['item1','item2','item3']
    const copy=[]
    items.forEach(function(item){
        copy.push(item)
    })
    console.log(copy)//['item1','item2','item3']
}
//es6
//查找返回符合规则的元素
function find(){
    const arr=[1,'2',3,3,'2']
    console.log(arr.find(n=>typeof n==='number'))//1
}
//查找返回符合规则的元素下标
function findIndex(){
    const arr=[1,'2',3,3,'2']
    console.log(arr.findIndex(n=>typeof n==='number'))//0
}
//(x,m,n)用x替换[m,n)的元素
function fill(){
    const arr=[1,2,3,4,5,6]
    arr.fill(0,1,4)//[1,0,0,0,5,6]
}
//(x,m,n)从x开始复制自身[m,n)的数组并替换，m,n默认0,-1
function copyWithin(){
    const arr = [1,2,3,4,5]
    console.log(arr.copyWithin(3))//[1,2,3,1,2]
    const arr1=[1,2,3,4,5]
    console.log(arr1.copyWithin(3,1))//[1,2,3,2,3]
    const arr2=[1,2,3,4,5]
    console.log(arr2.copyWithin(3,1,2))//[1,2,3,2,5]
}
//将对象转换成数组
function from(){
    Array.from('foo')//['f','o','o']
}
//将支转换为数组
function of(){
    Array.of(7)//[7]
    Array.of(1,2,3)//[1,2,3]
    Array(7)//[,,,,,,]
    Array(1,2,3)//[1,2,3]
}
//返回键值对
function entries(){
    const arr1=['a','b','c']
    for(let v of arr1.entries()){
        console.log(v)//[0,'a'] [1,'b'] [2,'c']
    }
    const arr2=new Set(['a','b','c'])
    for(let v of arr2.entries()){
        console.log(v)//['a','a'] ['b','b'] ['c','c']
    }
    const arr3=new Map()
    arr3.set('a','a')
    arr3.set('b','b')
    for(let v of arr3.entries()){
        console.log(v)//['a','a'] ['b','b']
    }
}
//返回键值对value
function values(){
    const arr1=['a','b','c']
    for(let v of arr1.values()){
        console.log(v)//'a' 'b' 'c'
    }
    const arr2=new Set(['a','b','c'])
    for(let v of arr2.values()){
        console.log(v)//'a' 'b' 'c'
    }
    const arr3=new Map()
    arr3.set('a','a')
    arr3.set('b','b')
    for(let v of arr3.values()){
        console.log(v)//'a' 'b'
    }
}
//返回键值对key
function keys(){
    const arr1=['a','b','c']
    for(let v of arr1.keys()){
        console.log(v)//0 1 2
    }
    const arr2=new Set(['a','b','c'])
    for(let v of arr2.keys()){
        console.log(v)//'a' 'b' 'c'
    }
    const arr3=new Map()
    arr3.set('a','a')
    arr3.set('b','b')
    for(let v of arr3.keys()){
        console.log(v)//'a' 'b'
    }
}
//(m,n)判断从n开始是否存在m，n可选
function includes(){
    const a=[1,2,3]
    a.includes(2)//true
    a.includes(4)//false
}
