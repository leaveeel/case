# tips

1. ie8不支持符号开头类名；<br />
2. ie8某些情况不支持空a标签 (e.g. div>img+a) 可以将img作为div背景；<br />
3. 父元素display:none后js无法读取内部自适应子元素的宽高属性 可以用visibility:hidden替代；<br />
4. 京东商城店铺装修css类名需要添加.user前缀(e.g. .head>.userHead) 每一块布局的css样式全局适用；<br />
5. APP嵌入h5页面会有js点击事件无效的问题, 可将点击对象换城 a 或者 button 标签, 或添加样式cursor: pointer;<br />
6. jQuery控制延迟隐藏 $("div").delay(2000).hide(0); //hide里0 否则无效；<br />
7. sort()排序数组仅可排序原有数组，动态添加的无法排序，可用冒泡方法排序，方法见case内漏斗图冒泡.html；<br />
8. 延迟执行function可以用setTimeout("function",second)实现;//e.g. setTimeout("alert('10s')",10000);<br />
9. 延时执行计时器可以用setTimeout，把计时器写在setTimeout的function内 //e.g. function t1(){ function t2(){} setInterval(t2,1000);} setTimeout(t1,1000);<br />
10. 交换元素顺序逻辑：a=b;b=c;c=a;<br />
11. 使用viewport做自适应布局时会出现文字大小异常的情况，高度固定可以给元素加上height属性，不固定可以加较大的max-height属性；<br />
12. pointer-events: none;样式可以阻止点击事件；T:UC浏览器跳转后返回再点击无效<br />
13. 有时候UC浏览器</h>标签text-align:center;不生效；设置宽度margin: auto;<br />
14. trigger()可用作自动执行事件；e.g.  $a.trigger("click") 自动执行a的点击事件<br />
15. a.indexOf(b) 搜索字符串a中第一次匹配b的位置，从0开始，未搜索到返回-1；<br />
16. 文字两段对其可在文字容器添加text-align:justify;属性，在容器内添加</span>元素，给</span>元素添加display:inline-block;padding-left:100%;<br />
