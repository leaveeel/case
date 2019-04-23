# demo
## demo目录下记录case内的所有demo/关键字, 方便查找；
0. [初始化](初始化)文件夹里集合了常用css样式和rem相关js，不定期更新
1. [js转盘](js转盘demo)
2. [rem/flex布局](rem自适应flex布局demo)
3. [基于webupload图片上传](图片上传)
4. [基于cityPicker选择省市区](地址)
5. [m端demo](手机商城demo)
6. [环形统计图/同心圆](环形统计图)
7. [滑动翻页/首尾循环](移动端滑动翻页浏览图片)
8. [顺丰快递打印](顺丰快递打印单)
9. [城市首字母排序/选择](首字母选择城市)
10. [插入iframe](addiframe.html)
11. [scroll首尾循环滚动/模块](scroll循环滚动.js)
12. [url截取](url截取传递数据.js)
13. [价格拖动/坐标尺](价格拖动.rar)
14. [pc分享到qq/微博/空间](分享.js)
15. [canvas刮刮卡](刮刮卡.html)
16. [不重复的随机数/随机颜色](取不重复的随机数.js)
17. [不留空白的轮播/不足一页移动剩余距离](可视区内不留空的轮播效果.html)
18. [翻页](固定显示n条的翻页.js)
19. [定位城市/省份/调取新浪接口](城市定位.js)
20. [弹簧/弹性动画/滑动](基于移动端滑动效果js的弹性动画效果.html)
21. [倒计时/固定截至时间](对比时间倒计时.html)
22. [text-align兼容性](手机uc浏览器text-align兼容性.html)
23. [号码正则/已过期](手机号码正则和判断.js)
24. [前端控制抽奖/不具安全性](抽奖demo.html)
25. [搜索框/联想搜索/多条](搜索框筛选(支持多条筛选).html)
26. [搜索框/联想搜索/单条](搜索框筛选.html)
27. [敏感词处理/不具安全性](敏感信息处理.js)
28. [日历/选择日期](日期选择.zip)
29. [比较时间](时间对比.js)
30. [模拟select](模拟select.html)
31. [浏览器滚动条事件](滚动条滚动和结束事件.js)
32. [漏斗图/冒泡排序/](漏斗图冒泡.html)
33. [图片轮播/焦点放大](焦点图放大.html)
34. [移动端定位input](移动端打开键盘定位input.js)
35. [touch事件](移动端滑动效果.js)
36. [倒计时/固定计时时间](规定时间的倒计时.html)
37. [键盘动作/按下](键盘按键动作.js)
38. [随机颜色/已弃用](随机颜色.html)
39. [公共部分异步加载](静态加载页面公共部分.js)
40. [页面滚动到底部事件/移动端翻页](页面滚动到底部加载.js)
41. [首字母筛选](首字母筛选.html)
42. [原生模拟可搜索select](原生模拟可搜索select)
43. [滑动验证](touchtest)
43. [数组按文本归类排序](数组按文本归类排序.js)
44. [数组操作方法](Arr.js)
45. [快速排序](quickSort.js)
46. [cookies操作](cookie.js)

# tips

1. ie8不支持符号开头类名；
2. ie8某些情况不支持空`<a>`, e.g.`div>img+a`可以将img作为div背景；
3. 父元素```display:none```后js无法读取内部自适应子元素的宽高属性 可以用```visibility:hidden```替代；
4. 京东商城店铺装修css类名需要添加.user前缀(.head => .userHead) 每一块布局的css样式全局适用；
5. APP嵌入h5页面会有js点击事件无效的问题, 可将点击对象换成 `<a>` 或者 `<button>`, 或添加样式```cursor: pointer;```
6. jQuery控制延迟隐藏 ```$("div").delay(2000).hide(0); //hide里0 否则无效；```
7. `sort()`排序数组仅可排序原有数组，动态添加的无法排序，可用冒泡方法排序，方法见[漏斗图冒泡.html](漏斗图冒泡.html);
8. 延迟执行function可以用```setTimeout("function",second)```实现;//e.g.```setTimeout("alert('10s')",10000);```
9. 延时执行计时器可以用`setTimeout`，把计时器写在setTimeout的function内 //e.g.```function t1(){ function t2(){} setInterval(t2,1000);} setTimeout(t1,1000);```
10. 交换元素顺序逻辑：a=b;b=c;c=a;
11. 使用viewport做自适应布局时会出现文字大小异常的情况，高度固定可以加上height属性，不固定可以加`较大`的`max-height`属性；
12. ```pointer-events: none;```样式可以阻止点击事件；T:UC浏览器跳转后返回再点击无效
13. 有时候手机UC浏览器`<h1>`~`<h6>`的```text-align:center;```不生效；设置宽度```margin: auto;```
14. `trigger()`可用作自动执行事件；e.g.```$a.trigger("click")``` 自动执行`<a>`的点击事件
15. ```a.indexOf(b)```搜索字符串a中第一次匹配b的位置，从0开始，未搜索到返回-1；
16. 文字两段对其可在文字容器添加```text-align:justify;```属性，在容器内添加`<span>`，给`<span>`添加```display:inline-block;padding-left:100%;```
17. 数字前补0可转换成字符串后计算位数添加0，或者添加需要的位数数量的0再拼接数字，截取后几位，可见[case/取不重复的随机数.js](取不重复的随机数.js);
18. 13条提到手机UC浏览器text-align不兼容问题，可以在需要用到该样式内部加一个`<div>`，给`<div>`添加`text-align`属性，可见[手机uc浏览器text-align兼容性.html](手机uc浏览器text-align兼容性.html);
19. [canvas刮刮卡](刮刮卡.html)效果如果设置刮层背景为图片会报错，是因为图片和网页不在同一域名下，可用颜色代替，或者将图片放在同一域名下，修改host无效；p.s canvas刮刮卡存在较大安全问题，不建议使用；
20. [搜索框筛选](搜索框筛选.html)只能在页面内只用到一次的情况下用，支持键盘控制，同页面多条搜索框可以参考[搜索框筛选(支持多条筛选)](搜索框筛选(支持多条筛选).html)，未加键盘映射；
21. 使用```1rem=10px```设置元素宽高时会出现```1rem=12px```而字体设置正常的情况，因为谷歌浏览器默认最小字体为12px；
22. `input`标签的`value`值比大小从第一位开始对比，所以会出现5000>10000=true的情况，可将`value`转换成`数字格式`，见36条；
23. 使用[移动端滑动效果](移动端滑动效果.js)时，如果想要在滑动时禁用点击事件```pointer-events: none;```，结束时启用点击事件```pointer-events: auto;```会导致可以穿过当前层触发底层的点击事件，暂无更好解决办法；
24. [移动端滑动效果](移动端滑动效果.js)在滑动一次后点击屏幕会继续触发滑动事件，因为endX记录了上一次的touch值，暂时无法清除
25. IOS和部分安卓手机```$("html,body").scrollTop()```取值为0，改成```$(window).scrollTop()```可解决；
26. [页面滚动到底部加载](页面滚动到底部加载.js)中通过滚动条位置判断是否加载，到达相应位置上下滑动都会加载下一页内容，如果只想下滑加载更换成[移动端滑动效果](移动端滑动效果.js)的写法；
27. 华为手机不支持```background: #00000050;```的写法；
28. 手机uc浏览器打开极速模式，如果使用`rem`，给`<html>`设置`font-size`的写法会不识别，可用js设置字号；
29. 从最后一个'/'开始获取文件名，不包含目录层级 ```location.pathname.substr(location.pathname.lastIndexOf("/") + 1);```
30. 将对象转换成字符串```JSON.stringify(object);```
31. 取x位小数```num.toFixed(x);```
32. ie8不支持```dom.classList```方法，可用```dom.className```代替;
33. 在object外部调用ajax传值，在object内可以打印但获取不到，可用setTimeout处理；
34. 原生AJAX请求获得的字符串可以用构造函数转换成数组 //e.g.```Function ('return (' + xmlhttp.responseText + ')')();```
35. react中将字符串转换成html标签可用```dangerouslySetInnerHTML={{__html:str}}```实现；//e.g.```div[dangerouslySetInnerHTML={{__html:this.state.contstr}}]```
36. 可使用`+str`将字符串转换为数字;
37. 移动node节点使用`document.createDocumentFragment()`虚拟节点的方法优化js性能；
38. 使用`transfotm`替换`margin`,`width`等属性优化js性能，减少重排；
39. 动画效果可以使用`transition`, `requestAnimationFrame()`实现，`transition`的回调`TransitionEnd`需要做各浏览器兼容，也可以在`transition`方法内用`setTimeout`实现；
