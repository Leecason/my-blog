(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{508:function(t,v,e){t.exports=e.p+"assets/img/parser_blocking_css.3d2a2913.png"},509:function(t,v,e){t.exports=e.p+"assets/img/async_and_defer.909c198b.jpeg"},552:function(t,v,e){"use strict";e.r(v);var _=e(4),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("ol",[_("li",[t._v("页面加载过程")]),t._v(" "),_("li",[t._v("浏览器渲染过程")]),t._v(" "),_("li",[t._v("相关问题")]),t._v(" "),_("li",[t._v("性能优化")])])]),t._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("浏览器的内核是指支持浏览器运行的最核心的程序，分为两个部分，一是渲染引擎，另一个是 JS 引擎。渲染引擎在不同的浏览器中也不是都相同的。目前市面上常见的浏览器内核可以分为这四种：Trident（IE）、Gecko（火狐）、Blink（Chrome、Opera）、Webkit（Safari）。这里面最耳熟能详的可能就是 Webkit 内核了，Webkit 内核是当下浏览器世界真正的霸主。\n本文以 Webkit 为例，对现代浏览器的渲染过程进行一个深度的剖析。")]),t._v(" "),_("h2",{attrs:{id:"页面加载过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面加载过程"}},[t._v("#")]),t._v(" 页面加载过程")]),t._v(" "),_("ol",[_("li",[t._v("浏览器根据 DNS(Domain Name System) 服务器得到域名的 IP 地址")]),t._v(" "),_("li",[t._v("向这个 IP 的机器发送 HTTP 请求")]),t._v(" "),_("li",[t._v("服务器收到、处理并返回 HTTP 请求")]),t._v(" "),_("li",[t._v("浏览器得到返回内容")])]),t._v(" "),_("p",[t._v("返回的内容其实就是一堆 HTML 格式的字符串，因为只有 HTML 格式浏览器才能正确解析，这是 W3C 标准的要求。接下来就是浏览器的渲染过程。")]),t._v(" "),_("h2",{attrs:{id:"浏览器渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[t._v("#")]),t._v(" 浏览器渲染过程")]),t._v(" "),_("p",[_("strong",[t._v("1.浏览器会解析三个东西")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("一是 HTML/SVG/XHTML，HTML字符串描述了一个页面的结构，浏览器会把 HTML 结构字符串解析转换 DOM 树形结构")])]),t._v(" "),_("li",[_("p",[t._v("二是CSS，解析 CSS 会产生 CSS 规则树，它和 DOM 结构比较像")])]),t._v(" "),_("li",[_("p",[t._v("三是 Javascript 脚本，等到 Javascript 脚本文件加载后， 通过 DOM API 和 CSSOM API 来操作 DOM Tree 和 CSS Rule Tree")])])]),t._v(" "),_("p",[_("strong",[t._v("2.解析完成后，浏览器引擎会通过 DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree")])]),t._v(" "),_("ul",[_("li",[t._v("Rendering Tree 渲染树并不等同于 DOM 树，渲染树只会包括需要显示的节点和这些节点的样式信息。（display 为 none 的元素不会在渲染树中显示）")]),t._v(" "),_("li",[t._v("CSS 的 Rule Tree 主要是为了完成匹配并把 CSS Rule 附加上 Rendering Tree 上的每个Element（也就是每个 Frame）")]),t._v(" "),_("li",[t._v("然后，计算每个 Frame 的位置，这又叫 layout 和 reflow 过程")])]),t._v(" "),_("p",[_("strong",[t._v("3.最后通过调用操作系统 Native GUI 的 API 绘制")])]),t._v(" "),_("blockquote",[_("p",[t._v("接下来针对这其中所经历的重要步骤详细阐述")])]),t._v(" "),_("h2",{attrs:{id:"构建dom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建dom"}},[t._v("#")]),t._v(" 构建DOM")]),t._v(" "),_("p",[t._v("宏观步骤：")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",[t._v("字节数据 -> 字符串 -> Token（词） -> Node -> DOM")])]),t._v(" "),_("ul",[_("li",[t._v("浏览器从磁盘或网络读取 HTML 的原始字节，并根据文件的指定编码（例如 UTF-8）将它们转换成字符串")])]),t._v(" "),_("p",[t._v("在网络中传输的内容其实都是 0 和 1 这些字节数据。当浏览器接收到这些字节数据以后，它会将这些字节数据转换为字符串，也就是我们写的代码。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("将字符串转换成 Token，例如："),_("code",[t._v("<html>")]),t._v("、"),_("code",[t._v("<body>")]),t._v(" 等。"),_("strong",[t._v("Token 中会标识出当前 Token 是“开始标签”或是“结束标签”亦或是“文本”等信息。")])])]),t._v(" "),_("li",[_("p",[t._v("生成节点对象并构建DOM")])])]),t._v(" "),_("p",[t._v("事实上，构建DOM的过程中，不是等所有 Token 都转换完成后再去生成节点对象，而是一边生成Token 一边消耗 Token 来生成节点对象（流式的处理）。换句话说，每个 Token 被生成后，会立刻消耗这个 Token 创建出节点对象。注意：带有结束标签标识的 Token 不会创建节点对象。")]),t._v(" "),_("h2",{attrs:{id:"构建cssom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建cssom"}},[t._v("#")]),t._v(" 构建CSSOM")]),t._v(" "),_("p",[t._v("DOM 会捕获页面的内容，但浏览器还需要知道页面如何展示，所以需要构建 CSSOM。")]),t._v(" "),_("p",[t._v("构建 CSSOM 的过程与构建 DOM 的过程非常相似，当浏览器接收到一段 CSS，浏览器首先要做的是识别出 Token，然后构建节点并生成 CSSOM：")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",[t._v("字节数据 -> 字符串 -> Token（词） -> Node -> CSSOM")])]),t._v(" "),_("p",[t._v("在这一过程中，浏览器会确定下每一个节点的样式到底是什么，并且这一过程其实是很消耗资源的。因为样式你可以自行设置给某个节点，也可以通过继承获得。在这一过程中，浏览器得递归 CSSOM 树，然后确定具体的元素到底是什么样式(这一过程也是尽量流式的处理)。")]),t._v(" "),_("p",[_("strong",[t._v("注意：CSS 匹配 HTML 元素是一个相当复杂和有性能问题的事情。所以，DOM 树要小，CSS 尽量用 id 和 class，千万不要过渡层叠下去。")])]),t._v(" "),_("h2",{attrs:{id:"构建渲染树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建渲染树"}},[t._v("#")]),t._v(" 构建渲染树")]),t._v(" "),_("p",[t._v("当我们生成 DOM 树和 CSSOM 树以后，就需要将这两棵树组合为渲染树。")]),t._v(" "),_("p",[t._v("在这一过程中，不是简单的将两者合并就行了。渲染树只会包括需要显示的节点和这些节点的样式信息，如果某个节点是 "),_("code",[t._v("display: none")]),t._v(" 的，那么就不会在渲染树中显示。")]),t._v(" "),_("p",[t._v("渲染过程中，如果遇到 "),_("code",[t._v("<script>")]),t._v(" 就停止渲染，执行 JS 代码。\n因为浏览器有 GUI 渲染线程与 JS 引擎线程，为了防止渲染出现不可预期的结果，这两个线程是"),_("strong",[t._v("互斥")]),t._v("的关系。JavaScript 的加载、解析与执行会"),_("strong",[t._v("阻塞")]),t._v(" DOM 的构建，也就是说，在构建 DOM时，HTML 解析器若遇到了 JavaScript，会暂停构建 DOM，将控制权移交给 JavaScript 引擎，等 JavaScript 引擎运行完毕，浏览器再从中断的地方恢复 DOM 构建。")]),t._v(" "),_("p",[t._v("也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。当然在当下，并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 "),_("code",[t._v("defer")]),t._v(" 或者 "),_("code",[t._v("async")]),t._v(" 属性（下文会介绍这两者的区别）。")]),t._v(" "),_("p",[_("strong",[t._v("JS 文件不只是阻塞 DOM 的构建，它会导致 CSSOM 也阻塞 DOM 的构建。")])]),t._v(" "),_("p",[t._v("这是因为 JavaScript 不只是可以改 DOM，它还可以更改样式，也就是它可以更改 CSSOM。因为不完整的 CSSOM 是无法使用的，如果 JavaScript 想访问 CSSOM 并更改它，那么在执行JavaScript 时，必须要能拿到完整的 CSSOM。所以就导致了如果浏览器尚未完成 CSSOM 的下载和构建，而却想在此时运行脚本，那么浏览器将延迟脚本执行和 DOM 构建，直至其完成 CSSOM 的下载和构建。也就是说，"),_("strong",[t._v("在这种情况下，浏览器会先下载和构建 CSSOM，然后再执行 JavaScript，最后在继续构建DOM。")])]),t._v(" "),_("p",[_("img",{attrs:{src:e(508),alt:"parser_blocking_css"}})]),t._v(" "),_("h2",{attrs:{id:"布局与绘制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#布局与绘制"}},[t._v("#")]),t._v(" 布局与绘制")]),t._v(" "),_("p",[t._v("当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流（reflow））。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。")]),t._v(" "),_("p",[t._v("布局流程的输出是一个“盒模型”，它会精确地捕获每个元素在视口内的确切位置和尺寸，所有相对测量值都将转换为屏幕上的绝对像素。")]),t._v(" "),_("p",[t._v("布局完成后，浏览器会立即发出“Paint Setup”和“Paint”事件，将渲染树转换成屏幕上的像素。")]),t._v(" "),_("blockquote",[_("p",[t._v("以上详细介绍了浏览器工作流程中的重要步骤，接下来讨论几个相关的问题：")])]),t._v(" "),_("h2",{attrs:{id:"相关问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#相关问题"}},[t._v("#")]),t._v(" 相关问题")]),t._v(" "),_("h3",{attrs:{id:"async-和-defer-的作用是什么-有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#async-和-defer-的作用是什么-有什么区别"}},[t._v("#")]),t._v(" async 和 defer 的作用是什么？有什么区别?")]),t._v(" "),_("p",[_("img",{attrs:{src:e(509),alt:"async_and_defer"}})]),t._v(" "),_("p",[t._v("蓝色线代表 JavaScript加载\n红色线代表 JavaScript执行\n绿色线代表 HTML 解析")]),t._v(" "),_("p",[_("strong",[t._v("1.情况1"),_("code",[t._v('<script src="script.js"><\/script>')])])]),t._v(" "),_("p",[t._v("没有 "),_("code",[t._v("defer")]),t._v(" 或 "),_("code",[t._v("async")]),t._v("，浏览器会立即加载并执行指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行。")]),t._v(" "),_("p",[_("strong",[t._v("2.情况2"),_("code",[t._v('<script async src="script.js"><\/script>')]),t._v("(异步下载)")])]),t._v(" "),_("p",[t._v("async 属性表示"),_("strong",[t._v("异步执行")]),t._v("引入的 JavaScript，与 defer 的区别在于，如果已经加载好，就会开始执行——无论此刻是 HTML 解析阶段还是 DOMContentLoaded 触发之后。需要注意的是，这种方式加载的 JavaScript 依然会阻塞 load 事件。换句话说，async-script 可能在 DOMContentLoaded 触发之前或之后执行，但一定在 load 触发之前执行。")]),t._v(" "),_("p",[_("strong",[t._v("3.情况3"),_("code",[t._v('<script defer src="script.js"><\/script>')]),t._v("(延迟执行)")])]),t._v(" "),_("p",[t._v("defer 属性表示"),_("strong",[t._v("延迟执")]),t._v("行引入的 JavaScript，即这段 JavaScript 加载时 HTML 并未停止解析，这两个过程是"),_("strong",[t._v("并行")]),t._v("的。整个 document 解析完毕且 defer-script 也加载完成之后（这两件事情的顺序无关），会执行所有由 defer-script 加载的 JavaScript 代码，然后触发 DOMContentLoaded 事件。")]),t._v(" "),_("p",[t._v("defer 与相比普通 script，有两点区别：")]),t._v(" "),_("ul",[_("li",[t._v("载入 JavaScript 文件时不阻塞 HTML 的解析")]),t._v(" "),_("li",[t._v("执行阶段被放到 HTML 标签解析完成之后")])]),t._v(" "),_("p",[t._v("在加载多个 JS 脚本的时候，async 是"),_("strong",[t._v("无顺序")]),t._v("的加载，而 defer 是"),_("strong",[t._v("有顺序")]),t._v("的加载。")]),t._v(" "),_("h3",{attrs:{id:"为什么操作-dom-慢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么操作-dom-慢"}},[t._v("#")]),t._v(" 为什么操作 DOM 慢")]),t._v(" "),_("blockquote",[_("p",[t._v("把 DOM 和 JavaScript 各自想象成一个岛屿，它们之间用收费桥梁连接。——《高性能 JavaScript》")])]),t._v(" "),_("p",[t._v("JS 是很快的，在 JS 中修改 DOM 对象也是很快的。在 JS 的世界里，一切是简单的、迅速的。但 DOM 操作并非 JS 一个人的独舞，而是两个模块之间的协作。")]),t._v(" "),_("p",[t._v("因为 DOM 是"),_("strong",[t._v("属于渲染引擎")]),t._v("中的东西，而 JS 又是 "),_("strong",[t._v("JS 引擎")]),t._v("中的东西。当我们用 JS 去操作 DOM 时，本质上是 JS 引擎和渲染引擎之间进行了“跨界交流”。这个“跨界交流”的实现并不简单，它依赖了桥接接口作为“桥梁”。")]),t._v(" "),_("p",[t._v("过“桥”要收费——这个开销本身就是不可忽略的。我们每操作一次 DOM（"),_("strong",[t._v("不管是为了修改还是仅仅为了访问其值")]),t._v("），都要过一次“桥”。过“桥”的次数一多，就会产生比较明显的性能问题。因此“减少 DOM 操作”的建议，并非空穴来风。")]),t._v(" "),_("h3",{attrs:{id:"你真的了解回流和重绘吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#你真的了解回流和重绘吗"}},[t._v("#")]),t._v(" 你真的了解回流和重绘吗")]),t._v(" "),_("p",[t._v("渲染的流程基本上是这样：")]),t._v(" "),_("ol",[_("li",[t._v("计算 CSS 样式")]),t._v(" "),_("li",[t._v("构建Render Tree")]),t._v(" "),_("li",[t._v("Layout – 定位坐标和大小")]),t._v(" "),_("li",[t._v("正式开画")])]),t._v(" "),_("p",[t._v("这里重要要说两个概念，一个是 "),_("code",[t._v("Reflow")]),t._v("，另一个是 "),_("code",[t._v("Repaint")])]),t._v(" "),_("ul",[_("li",[t._v("重绘：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背景色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了回流环节）。")]),t._v(" "),_("li",[t._v("回流：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。这个过程就是回流（也叫重排）")])]),t._v(" "),_("p",[t._v("当网页生成的时候，至少会渲染一次。在用户访问的过程中，还会不断重新渲染。重新渲染会重复回流 + 重绘或者只有重绘。")]),t._v(" "),_("p",[_("strong",[t._v("回流必定会发生重绘，重绘不一定会引发回流。")])]),t._v(" "),_("p",[t._v("重绘和回流会在我们设置节点样式时频繁出现，同时也会很大程度上影响性能。回流所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点的一系列回流。")]),t._v(" "),_("p",[_("strong",[t._v("1.常见引起回流属性和方法")])]),t._v(" "),_("p",[t._v("任何会改变元素"),_("strong",[t._v("几何信息")]),t._v("(元素的位置和尺寸大小)的操作，都会触发回流，")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("添加或者删除")]),t._v("可见的 DOM 元素")]),t._v(" "),_("li",[t._v("元素"),_("strong",[t._v("尺寸改变")]),t._v("——边距、填充、边框、宽度和高度")]),t._v(" "),_("li",[_("strong",[t._v("内容变化")]),t._v("，比如用户在 input 框中输入文字")]),t._v(" "),_("li",[t._v("浏览器"),_("strong",[t._v("窗口尺寸改变")]),t._v("——resize 事件发生时")]),t._v(" "),_("li",[_("strong",[t._v("计算 offsetWidth 和 offsetHeight 属性")])]),t._v(" "),_("li",[t._v("设置 "),_("strong",[t._v("style 属性")]),t._v("的值")])]),t._v(" "),_("p",[_("strong",[t._v("2.常见引起重绘属性和方法")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("color")])]),t._v(" "),_("li",[_("code",[t._v("border-style")])]),t._v(" "),_("li",[_("code",[t._v("visibility")])]),t._v(" "),_("li",[_("code",[t._v("background")])]),t._v(" "),_("li",[_("code",[t._v("text-decoration")])]),t._v(" "),_("li",[_("code",[t._v("background-image")])]),t._v(" "),_("li",[_("code",[t._v("background-position")])]),t._v(" "),_("li",[_("code",[t._v("background-repeat")])]),t._v(" "),_("li",[_("code",[t._v("outline-color")])]),t._v(" "),_("li",[_("code",[t._v("outline")])]),t._v(" "),_("li",[_("code",[t._v("outline-style")])]),t._v(" "),_("li",[_("code",[t._v("border-radius")])]),t._v(" "),_("li",[_("code",[t._v("outline-width")])]),t._v(" "),_("li",[_("code",[t._v("box-shadow")])]),t._v(" "),_("li",[_("code",[t._v("background-size")])])]),t._v(" "),_("p",[_("strong",[t._v("3.如何减少回流、重绘")])]),t._v(" "),_("ul",[_("li",[t._v("使用 transform 替代 top")]),t._v(" "),_("li",[t._v("使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）")]),t._v(" "),_("li",[t._v("不要把节点的属性值放在一个循环里当成循环里的变量。")])]),t._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取 offsetTop 会导致回流，因为需要去获取正确的值")]),t._v("\n  console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.test'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br")])]),_("ul",[_("li",[t._v("不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局")]),t._v(" "),_("li",[t._v("动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame")]),t._v(" "),_("li",[t._v("CSS 选择符从右往左匹配查找，避免节点层级过多")]),t._v(" "),_("li",[t._v("将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 video 标签来说，浏览器会自动将该节点变为图层。")])]),t._v(" "),_("h2",{attrs:{id:"性能优化策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能优化策略"}},[t._v("#")]),t._v(" 性能优化策略")]),t._v(" "),_("p",[t._v("基于上面介绍的浏览器渲染原理，DOM 和 CSSOM 结构构建顺序，初始化可以对页面渲染做些优化，提升页面性能。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("JS优化： "),_("code",[t._v("<script>")]),t._v(" 标签加上 defer属性 和 async属性 用于在"),_("strong",[t._v("不阻塞页面文档解析")]),t._v("的前提下，控制脚本的下载和执行。")]),t._v(" "),_("ul",[_("li",[t._v("defer属性： 用于开启"),_("strong",[t._v("新的线程")]),t._v("下载脚本文件，并使脚本在"),_("strong",[t._v("文档解析完成后执行")])]),t._v(" "),_("li",[t._v("async属性： HTML5 新增属性，用于"),_("strong",[t._v("异步下载")]),t._v("脚本文件，"),_("strong",[t._v("下载完毕立即解释执行代码")])])])]),t._v(" "),_("li",[_("p",[t._v("CSS优化： "),_("code",[t._v("<link>")]),t._v(" 标签的 rel属性 中的属性值设置为 "),_("code",[t._v("preload")]),t._v(" 能够让你在你的 HTML 页面中可以指明哪些资源是在页面加载完成后即刻需要的，最优的配置加载顺序，提高渲染性能")])])]),t._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("ul",[_("li",[t._v("浏览器工作流程：构建DOM -> 构建CSSOM -> 构建渲染树 -> 布局 -> 绘制。")]),t._v(" "),_("li",[t._v("CSSOM 会"),_("strong",[t._v("阻塞")]),t._v("渲染，只有当 CSSOM 构建完毕后才会进入下一个阶段构建渲染树。")]),t._v(" "),_("li",[t._v("通常情况下 DOM 和 CSSOM 是并行构建的，但是当浏览器遇到一个不带 defer 或 async 属性的 script 标签时，DOM构建将暂停，如果此时又恰巧浏览器尚未完成 CSSOM 的下载和构建，由于 JavaScript 可以修改 CSSOM，所以需要等CSSOM 构建完毕后再执行 JS，最后才重新 DOM 构建。")])]),t._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/51",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入浅出浏览器渲染原理"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"(https://segmentfault.com/q/1010000000640869)"}},[t._v("async 和 defer 的区别 | SegmentFault")])]),t._v(" "),_("li",[_("a",{attrs:{href:"https://coolshell.cn/articles/9666.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的渲染原理简介"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5c024ecbf265da616a476638",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端面试之道"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650588806&idx=1&sn=408a54e7c8102fd6944c9a40b119015a&chksm=8891d6a2bfe65fb42f493fe9a4dab672dd7e440f31e753196cee0cfbc6696e4f8dd3a669e040&mpshare=1&scene=1&srcid=1228ZrXsmbZKcgCSu7zTVDwy#",target:"_blank",rel:"noopener noreferrer"}},[t._v("关键渲染路径"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/book/5b936540f265da0a9624b04b/section/5bac3a4df265da0aa81c043c",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端性能优化原理与实践"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/book/5c47343bf265da612b13e5c0/section/5c4737375188255de8397ae3",target:"_blank",rel:"noopener noreferrer"}},[t._v("由入门到专家：前端全链路开发实践手册"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/book/5a8f9ddcf265da4e9f6fb959/section/5a8f9f7bf265da4e82635e46",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web 前端面试指南与高频考题解析"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=a.exports}}]);