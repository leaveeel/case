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
        for (let i = 0; i < t.length; i++) {
            for (let j = 0; j < r.length; j++) {
                if (t[i] == r[j].title || (!r[j].title && t[i] == 'other')) {
                    n.push(r[j])
                }
            }
        }
        console.log(n)
    }
})
