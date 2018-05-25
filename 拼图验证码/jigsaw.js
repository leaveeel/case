(function () {
    var cx
    const l = 40, // 滑块边长
        w = 500, // canvas宽度
        h = 300 // canvas高度
    const L = l // 滑块实际边长

    function getRandomNumberByRange(start, end) {
        return Math.round(Math.random() * (end - start) + start)
    }

    function createCanvas(width, height) {
        const canvas = createElement('canvas')
        canvas.width = width
        canvas.height = height
        return canvas
    }

    function createImg(onload) {
        const img = createElement('img')
        img.crossOrigin = "Anonymous"
        img.onload = onload
        img.onerror = () => {
            img.src = getRandomImg()
        }
        img.src = getRandomImg()
        return img
    }

    function createElement(tagName) {
        return document.createElement(tagName)
    }

    function addClass(tag, className) {
        tag.classList.add(className)
    }

    function removeClass(tag, className) {
        tag.classList.remove(className)
    }

    function getRandomImg() {
        return 'https://picsum.photos/300/150/?image=' + getRandomNumberByRange(0, 1084)
    }

    function draw(ctx, operation, x, y) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + l, y)
        ctx.lineTo(x + l, y + l)
        ctx.lineTo(x, y + l)
        ctx.lineTo(x, y)
        ctx.fillStyle = '#fff'
        ctx[operation]()
        ctx.beginPath()
        ctx.globalCompositeOperation = "xor"
        ctx.fill()
    }

    function sum(x, y) {
        return x + y
    }

    function square(x) {
        return x * x
    }

    class jigsaw {
        constructor(el, success, fail) {
            this.el = el
            this.success = success
            this.fail = fail
        }

        init() {
            this.initDOM()
            this.initImg()
            this.draw()
            this.bindEvents()
        }

        initDOM() {
            const canvas = createCanvas(w, h) // 画布
            const block = canvas.cloneNode(true) // 滑块
            const sliderContainer = createElement('div')
            const sliderMask = createElement('div')
            const slider = createElement('div')
            const sliderIcon = createElement('span')
            const text = createElement('span')

            canvas.id = "canvas"
            block.className = 'block'
            sliderContainer.className = 'sliderContainer'
            sliderMask.className = 'sliderMask'
            slider.className = 'slider'
            sliderIcon.className = 'sliderIcon'
            text.innerHTML = '向右滑动滑块填充拼图'
            text.className = 'sliderText'

            const el = this.el
            el.appendChild(canvas)
            el.appendChild(block)
            canvas.style.opacity = 0.5
            block.style.zIndex = 5
            slider.appendChild(sliderIcon)
            sliderMask.appendChild(slider)
            sliderContainer.style.width = w - 2 + 'px'
            sliderContainer.appendChild(sliderMask)
            sliderContainer.appendChild(text)
            el.appendChild(sliderContainer)

            Object.assign(this, {
                canvas,
                block,
                sliderContainer,
                slider,
                sliderMask,
                sliderIcon,
                text,
                canvasCtx: canvas.getContext('2d'),
                blockCtx: block.getContext('2d')
            })
        }

        initImg() {
            const img = createImg(() => {
                this.canvasCtx.drawImage(img, 0, 0, w, h)
                this.blockCtx.drawImage(img, 0, 0, w, h)
                const y = this.y
                const ImageData = this.blockCtx.getImageData(this.x, y, L, L)
                this.block.width = L
                this.blockCtx.putImageData(ImageData, 0, y)
            })
            this.img = img
        }

        draw() {
            // 随机创建滑块的位置
            this.x = getRandomNumberByRange(L + 10, w - (L + 10))
            this.y = getRandomNumberByRange(10 , h - (L + 10))
            draw(this.canvasCtx, 'fill', this.x, this.y)
            draw(this.blockCtx, 'clip', this.x, this.y)
            cx=this.x
        }

        clean() {
            this.canvasCtx.clearRect(0, 0, w, h)
            this.blockCtx.clearRect(0, 0, w, h)
            this.block.width = w
        }

        bindEvents() {
            this.el.onselectstart = () => false

            let startX, endX, touchsuc = true, tc
            this.slider.addEventListener('touchstart', function (e) {
                if(tc==0) touchsuc=true
                var touch = e.touches[0];
                startX = touch.pageX;//获取起始X坐标
                tc=null
            })
            document.addEventListener('touchmove', (e) => {
                if(!touchsuc) return false
                var touch = e.touches[0];
                endX = touch.pageX;//获取终止X坐标
                const moveX = endX - startX
                if (moveX < 0 || moveX + 40 > w) return false
                this.slider.style.left = moveX + 'px'
                this.block.style.left = moveX+1 + 'px'
                addClass(this.sliderContainer, 'sliderContainer_active')
                this.sliderMask.style.width = moveX + 'px'
            })
            document.addEventListener('touchend', (e) => {
                if(!touchsuc) return false
                touchsuc = false
                var line = endX - startX;
                removeClass(this.sliderContainer, 'sliderContainer_active')
                if(cx-5 < line && cx+5 > line){
                    addClass(this.sliderContainer, 'sliderContainer_success')
                    this.success && this.success()
                    tc=1
                    canvas.style.opacity = 1
                }else {
                    addClass(this.sliderContainer, 'sliderContainer_fail')
                    this.fail && this.fail()
                    setTimeout(() => {
                        this.reset()
                        tc=0
                    }, 200)
                }
            })
            let originX, originY, trail = [], isMouseDown = true, mc
            this.slider.addEventListener('mousedown', function (e) {
                if(mc==0) isMouseDown=true
                originX = e.x, originY = e.y
                mc=null
            })
            document.addEventListener('mousemove', (e) => {
                if (!isMouseDown) return false
                const moveX = e.x - originX
                const moveY = e.y - originY
                if (moveX < 0 || moveX + 40 > w) return false
                this.slider.style.left = moveX + 'px'
                this.block.style.left = moveX+1 + 'px'

                addClass(this.sliderContainer, 'sliderContainer_active')
                this.sliderMask.style.width = moveX + 'px'
                trail.push(moveY)
            })
            document.addEventListener('mouseup', (e) => {
                if (!isMouseDown) return false
                isMouseDown = false
                if (e.x == originX) return false
                removeClass(this.sliderContainer, 'sliderContainer_active')
                this.trail = trail
                const {spliced, TuringTest} = this.verify()
                if (spliced) {
                    if (TuringTest) {
                        addClass(this.sliderContainer, 'sliderContainer_success')
                        this.success && this.success()
                        mc=1
                        canvas.style.opacity = 1
                    } else {
                        addClass(this.sliderContainer, 'sliderContainer_fail')
                        this.reset()
                        mc=0
                    }
                } else {
                    addClass(this.sliderContainer, 'sliderContainer_fail')
                    this.fail && this.fail()
                    setTimeout(() => {
                        this.reset()
                        mc=0
                    }, 200)
                }
            })
        }

        verify() {
            const arr = this.trail // 拖动时y轴的移动距离
            const average = arr.reduce(sum) / arr.length // 平均值
            const deviations = arr.map(x => x - average) // 偏差数组
            const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length) // 标准差
            const left = parseInt(this.block.style.left)
            return {
                spliced: Math.abs(left - this.x) < 10,
                TuringTest: average !== stddev, // 只是简单的验证拖动轨迹，相等时一般为0，表示可能非人为操作
            }
        }

        reset() {
            this.sliderContainer.className = 'sliderContainer'
            this.slider.style.left = 0
            this.block.style.left = 0
            this.sliderMask.style.width = 0
            this.clean()
            this.img.src = getRandomImg()
            this.draw()
        }

    }

    window.jigsaw = {
        init: function (element, success, fail) {
            new jigsaw(element, success, fail).init()
        }
    }
}(window))
