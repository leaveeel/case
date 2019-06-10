scroll = () => {
    let dom = document.getElementById('scroll'),
        //虚拟节点
        fragment = document.createDocumentFragment(),
        //获取精确值
        ////视区高度
        view = +window.getComputedStyle(dom.parentNode).height.slice(0, -2),
        ////元素高度
        li = +window.getComputedStyle(dom.firstElementChild).height.slice(0, -2),
        //开始时间
        start = null,
        //动画id
        stepID = null,
        //计时器id
        interval = null,
        //动画
        step = (timestamp) => {
            let liArr = [], i = 0;
            //储存第一页的元素
            while (i < Math.ceil(view / li)) {
                liArr.push(dom.children[i])
                i++
            }
            //储存动画时间
            if (!start) start = timestamp
            //移动步幅
            let progress = (timestamp - start) / 2;
            dom.style.transform = 'translateY(' + -progress + 'px)'
            //储存动画id
            stepID = window.requestAnimationFrame(step)
            if (progress >= view) {
                //清除动画
                window.cancelAnimationFrame(stepID)
                //重置
                progress = 0
                start = null
                dom.style.transform = 'translateY(' + -progress + 'px)'
                //移动元素
                liArr.map(item => {
                    fragment.appendChild(item)
                    return item
                })
                dom.appendChild(fragment)
            }
        }
    //执行计时器
    if(+window.getComputedStyle(dom).height.slice(0, -2) > view){
        interval = setInterval(() => {
            window.requestAnimationFrame(step)
        }, 4000)
    }
    //监听页面可见
    document.addEventListener("visibilitychange", function() {
        clearInterval(interval)
        if(!document.hidden) {
            interval = setInterval(() => {
                window.requestAnimationFrame(step)
            }, 4000)
        }
    });
}
