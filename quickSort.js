+(function() {
    const arr = []
    for (let i = 0; i < 10; i++) {
        var text = ''
        for (let j = 0; j < 4; j++) {
            if (Math.random() * 10 < 5) {
                text = text + String.fromCharCode(65 + Math.floor(Math.random() * (91 - 65)))
            } else {
                text = text + String.fromCharCode(97 + Math.floor(Math.random() * (123 - 97)))
            }
        }
        arr.push(text)
    }
    /*for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }*/
    console.log(arr)

    const quickSort = (arr) => {
        if (arr.length > 1) {
            const lessArr = [],
                moreArr = [],
                mid = arr[Math.floor(arr.length / 2)]
            for (var i = 0; i < arr.length; i++) {
                if (i === Math.floor(arr.length / 2)) continue
                if (arr[i] < mid) {
                    lessArr.push(arr[i])
                } else {
                    moreArr.push(arr[i])
                }
            }
            return quickSort(lessArr).concat([mid], quickSort(moreArr));
        }
        return arr
    }
    console.log(quickSort(arr))
})()