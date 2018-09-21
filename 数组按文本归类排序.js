/*  功能
**  将数组按文本排序
**  经历
**  看react时有个demo 根据数据进行列表，将相同类别合并。自己在写的时候想到数据可能并不规律，例如第一个类别为a，第二个为b，第三个为a，当时就想到需要先进行排序，在进行分类。于是用了先遍历类别=>将相同的合并=>再将子集合并=>遍历新数组=>获取类别值=>遍历该类别下子集数组=>获取子集数据，用字符串的方式输出到jsx；随后看了文档的demo发现和我的写法不同，直接根据数组生成jsx，并且在修改了类别数据后也确实没有进行排序，于是又想跟据他的demo进行修改。但因为文本不同于数字，想了很久逻辑都推翻了，又不想修改数据结构添加标记，今天想到可以用去重查重新建数组，于是写了这个js
*/

$.ajax({
    url:'content.json',
    dataType:'json',
    success:function(r){
        let t = [],
            n = []
        for (let i in r) {
            if (t.indexOf(r[i].title) == -1) {
                if (!r[i].title) {
                    t.push('other')
                } else {
                    t.push(r[i].title)
                }
            }
        }
        for (let i in t) {
            for (let j in r) {
                if (t[i] == r[j].title || (!r[j].title && t[i] == 'other')) {
                    n.push(r[j])
                }
            }
        }
        console.log(n)
    }
})
