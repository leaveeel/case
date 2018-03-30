# tips

1. ie8不支持符号开头类名；<br />
2. ie8某些情况不支持空a标签 (e.g. div>img+a) 可以将img作为div背景；<br />
3. 父元素display:none后js无法读取内部自适应子元素的宽高属性 可以用visibility:hidden替代；<br />
4. 京东商城店铺装修css类名需要添加.user前缀(e.g. .head >> .userHead) 每一块布局的css样式全局适用；<br />
5. APP嵌入h5页面会有js点击事件无效的问题, 可将点击对象换成 a 或者 button 标签, 或添加样式cursor: pointer;<br />
6. jQuery控制延迟隐藏 $("div").delay(2000).hide(0); //hide里0 否则无效；<br />
7. sort()排序数组仅可排序原有数组，动态添加的无法排序，可用冒泡方法排序，方法见case内<a href="漏斗图冒泡.html">漏斗图冒泡.html</a>;<br />
8. 延迟执行function可以用setTimeout("function",second)实现;//e.g. setTimeout("alert('10s')",10000);<br />
9. 延时执行计时器可以用setTimeout，把计时器写在setTimeout的function内 //e.g. function t1(){ function t2(){} setInterval(t2,1000);} setTimeout(t1,1000);<br />
10. 交换元素顺序逻辑：a=b;b=c;c=a;<br />
11. 使用viewport做自适应布局时会出现文字大小异常的情况，高度固定可以加上height属性，不固定可以加较大的max-height属性；<br />
12. pointer-events: none;样式可以阻止点击事件；T:UC浏览器跳转后返回再点击无效<br />
13. 有时候手机UC浏览器 h 标签text-align:center;不生效；设置宽度margin: auto;<br />
14. trigger()可用作自动执行事件；e.g.  $a.trigger("click") 自动执行a的点击事件<br />
15. a.indexOf(b) 搜索字符串a中第一次匹配b的位置，从0开始，未搜索到返回-1；<br />
16. 文字两段对其可在文字容器添加text-align:justify;属性，在容器内添加 span 标签，给 span 标签添加display:inline-block;padding-left:100%;<br />
17. 数字前补0可转换成字符串后计算位数添加0，或者添加需要的位数数量的0再拼接数字，截取后几位，可见<a href="取不重复的随机数.js">case/取不重复的随机数.js</a>;<br />
18. 13条提到手机UC浏览器text-align不兼容问题，可以在需要用到该样式内部加一个 div 标签，给 div 添加text-align属性，可见<a href="手机uc浏览器text-align兼容性.html">手机uc浏览器text-align兼容性.html</a>;<br />
19. <a href="刮刮卡.html">canvas刮刮卡</a>效果如果设置刮层背景为图片会报错，是因为图片和网页不在同一域名下，可用颜色代替，或者将图片放在同一域名下，修改host无效；p.s canvas刮刮卡存在较大安全问题，不建议使用；<br />
20. <a href="搜索框筛选.html">搜索框筛选</a>只能在页面内只用到一次的情况下用，支持键盘控制，同页面多条搜索框可以参考<a href="搜索框筛选(支持多条筛选).html">搜索框筛选(支持多条筛选)</a>，未加键盘映射；<br />
21. 使用1rem=10px设置元素宽高时会出现1rem=12px而字体设置正常的情况，因为谷歌浏览器最小字体大小为12px；<br />
22. input标签的value值比大小从第一位开始对比，所以会出现5000>10000=true的情况，可将value转换成数字形式；<br />
23. 使用<a href="移动端滑动效果.js">移动端滑动效果</a>时，如果想要在滑动时禁用点击事件(pointer-events: none;)，结束时启用点击事件(pointer-events: auto;)会导致可以穿过当前层触发底层的点击事件，暂无更好解决办法；<br />
24. <a href="移动端滑动效果.js">移动端滑动效果</a>在滑动一次后点击屏幕会继续触发滑动事件，因为endX记录了上一次的touch值，暂时无法清除；<br />
25. IOS和部分安卓手机$("html,body").scrollTop()取值为0，改成$(window).scrollTop()可解决；<br />
26. <a href="页面滚动到底部加载.js">页面滚动到底部加载</a>中通过滚动条位置判断是否加载，到达相应位置上下滑动都会加载下一页内容，如果只想下滑加载更换成<a href="移动端滑动效果.js">移动端滑动效果</a>的写法；<br />
27. 华为手机不支持background: #00000050 的写法；<br />
28. 手机uc浏览器打开极速模式，如果使用rem给html设置font-size的写法会不识别，可用js设置字号；<br />
29. 从最后一个'/'开始获取文件名，不包含目录层级 location.pathname.substr(location.pathname.lastIndexOf("/") + 1);<br/>
