# response-web-design

响应式 Web 设计

**使用百分比宽度布局，同时使用媒体查询来限制变动的范围**，这两点是响应式设计的核心。

- 弹性网格布局
  - 宽度使用百分比。
  - 字体使用 rem 和 em。
- 弹性图片
  - 图片默认宽度 100%。
  - 为特定图片指定特定的百分比宽度。
  - 限制最大宽度为图片实际宽度。
- 媒体查询
  - 视口从大到小定义。

## 弹性网格布局

### 宽度使用百分比

```css
.wrapper {
  width: 100%;

  /* 外边距的百分比是相对于包含块的宽度 */
  margin-top: 20%;
  margin-right: 20%;
  margin-left: 20%;
  margin-bottom: 20%;

  /* 内边距的百分比是相对于包含块的宽度 */
  padding-top: 20%;
  padding-right: 20%;
  padding-bottom: 20%;
  padding-left: 20%;
}
```

### 字体使用 em 和 rem

通过62.5%的设定，就可以很容易用 `rem` 来定义具体属性的尺寸了（10倍的关系）。

```css
/* 基准字号 16px * 62.5% = 10px */ 
html { font-size:62.5%; }
```


`rem` 是相对于 html 的字体大小。
`em` 是相对于当前字体大小。

## 弹性图片

```css
/* 使图片自动缩放到与其容器 100% 匹配 */
img {
  max-width: 100%;
}

/* 为特定图片指定特定的规则 */
.sideBlock img {
  max-width: 45%;
}

/* 给弹性图片设置阈值 */
.oscarMain {
  float: left;
  margin-top: -28px;
  width: 28.9398281%; /* 202/698 */
  max-width: 202px; /* 限制图片的最大宽度 */
}
```

## 媒体查询

使用媒体查询设置基准字号：

```css
/* 基准字号 16px * 62.5% = 10px */
/* 有的浏览器最小支持 12px，所以不能直接定义为 10px */
html { font-size:62.5%; }

@media screen and (min-width: 1080px) {
  html {
    font-size: 18px;
    background-color: rebeccapurple;
  }
}

@media screen and (min-width: 1001px) and (max-width: 1080px) {
  html {
    font-size: 16px;
    background-color: red;
  }
}

@media screen and (min-width: 805px) and (max-width: 1000px) {
  html {
    font-size: 14px;
    background-color: blue;
  }
}

@media screen and (min-width: 375px) and (max-width: 804px) {
  html {
    font-size: 12px;
    background-color: yellow;
  }
}
```

## CSS 样式组织方式

CSS 样式根据选择器的特指度和样式的顺序产生作用。因此，有必要按照样式产生作用的顺序组织 CSS 代码。

1. 通用样式
2. 基础样式
3. 组件及其容器的样式
4. 结构化样式
5. 功能性样式
6. 浏览器特定样式（如果一定需要）

```
styles
├── normalizing-styles
│   └── normalize.css
│ 
├── base-styles
│   ├── forms.css
│   ├── heading.css
│   ├── images.css
│   ├── lists.css
│   └── tables.css
│   └── etc.
│ 
├── component-styles
│   ├── alerts.css
│   ├── buttons.css
│   ├── carousel.css
│   ├── dropdowns.css
│   └── modals.css
│   └── etc.
│ 
├── structural-styles
│   ├── layout-checkout.css
│   ├── layout-primary.css
│   ├── layout-settings.css
│   └── layout-sidebar.css
│   └── etc.
│ 
│── utility-sytles
│    └── utility.css
│ 
├── browser-specific-styles
│   └── ie8.css
│ 
└── main.css
```

## CSS

CSS 1 发表于 1996 年，它非常简短，而且比较简答。它的内容少到用一个 HTML 页面就足以呈现了。

CSS 2 发表于 1998 年，它的定义更加严格，囊括了更多的功能。此时，规范的篇幅暴增到了 480 页打印纸，人们已经无法把它完整地记忆下来了。

CSS 2 之后，CSS 工作组意识到这门语言已经变得非常庞大，再也无法把它塞进单个规范中了。这样不仅阅读和编辑极其困难，而且限制了 CSS 本身的快速发展。因此，工作组决定迈出一步，将 CSS 打散到多个不同的规范（模块）中，每个模块都可以独立更新版本。这其中，那些延续 CSS 2.1 已有特性的模块会升级到 3 这个版本号。比如以下模块：

- CSS 语法（http://w3.org/TR/css-syntax-3）
- CSS 层叠与继承（http://w3.org/TR/css-cascade-3）
- CSS 颜色（http://w3.org/TR/css3-color）
- 选择符（http://w3.org/TR/selectors）
- CSS 背景与边框（http://w3.org/TR/css3-background）
- CSS 值与单位（http://w3.org/TR/css-values-3）
- CSS 文本排版（http://w3.org/TR/css-text-3）
- CSS 文本装饰效果（http://w3.org/TR/css-text-decor-3）
- CSS 字体（http://w3.org/TR/css3-fonts）
- CSS 基本 UI 特性（http://w3.org/TR/css3-ui）

此外，如果某个模块是前所未有的新概念，那它的版本号将从 1 开始，比如下面这些：

- CSS 变形 （http://w3.org/TR/css-transform-1）
- 图像混合效果（http://w3.org/TR/compositing-1）
- 滤镜效果（http://w3.org/TR/filter-effects-1）
- CSS 遮罩（http://w3.org/TR/css-masking-1）
- CSS 伸缩盒布局（http://w3.org/TR/css-flexbox-1）
- CSS 网格布局（http://w3.org/TR/css-grid-1）

尽管 “CSS3” 这个词非常流行，但它实际上并没有在任何规范中定义过，可以算是人们的俗称。

## 浏览器前缀

Firefox 的 `-moz-`、IE 的 `-ms-`、Opera 的 `-o-` 以及 Safari 和 Chrome 的 `-webkit-`。

## CSS 编码技巧

### 技巧1：尽量减少代码重复

在软件开发中，保持代码的 DRY 和可维护性是最大的挑战之一，而这句话对 CSS 也是适用的。在实践中，代码可维护性的最大要素是**尽量减少改动时要编辑的地方**。举例来说，如果放大一个按钮时要在一堆规则中进行 10 处修改，这就说明代码的可维护性太差：

```css
.button {
  padding: 6px 16px;
  border: 1px solid #446d88;
  background: #58a linear-gradient(#77a0bb, #58a);
  border-radius: 4px;
  box-shadow: 0 1px 5px gray;
  color: white;
  text-shadow: 0 -1px 1px #335166;
  font-size: 20px;
  line-height: 30px;
}
```

- 当某些值相互依赖时，应该把它们的相互关系用代码表达出来。在这个例子中，行高是字号的 1.5 倍，这样的代码会更容易维护：`line-height: 1.5;`
- 字号应该使用相对值，例如百分比或者 em。
- 为了避免放大字号会破坏其他的长度和高度值，需要使用相对值 em，这样效果值都变成可缩短的了，而且是依赖字号进行缩放。
- em 是相对于当前设定的 `font-size` 而言的，分子是需要转换的值，分母这里就是 `20px`

```css
.button {
  padding: .3rem .8em; /* 6px/20px 16px/20px */
  border: 1px solid #446d88;
  background: #58a linear-gradient(#77a0bb, #58a);
  border-radius: 4px; /* 4px/20px */
  box-shadow: 0 .05em .25em gray; /* 5px/20px  5px/20px */
  color: white;
  text-shadow: 0 -.05em .05em #335166; /* 1px/20px  1px/20px */
  font-size: 20px; /* 20px/16px 假设父级的字号是 16px */
  line-height: 1.5; /* 30px/20px 行高是字号的 1.5 倍 */
}
```

### 技巧2：关于响应式网页设计

每个媒体查询都会增加成本。你添加的媒体查询越多，你的 CSS 代码就会变得越来越经不起折腾。这并不是说媒体查询是一种不良实践。**只要用对了，它就是利器**。但是，你只应该把它作为最后的手段。下面有些建议，可能帮助你避免不必要的媒体查询：

1. 使用**百分比长度**来取代固定长度。如果实在做不到这一点，也应该尝试使用和视口相关的单位（vm、vh、vmin 和 vmax），它们的值解析为视口宽度或高度的百分比。
2. 当你需要在较大的分辨率下得到固定宽度时，使用 `max-width` 而不是 width，因为它可以适应较小的分辨率，而无需使用媒体查询。
3. 不要忘记为替换元素（如 img、object、video、iframe 等）设置一个 `max-width: 100%;`。

当网页本身的设计足够灵活时，让它变成响应式应该只需要用到一些简短的媒体查询代码。关键在于布局原本就是弹性可伸缩的。

### 技巧3：我应该使用预处理吗

SCSS 为 CSS 的编写提供了一些便利，比如：

- 变量
- mixin
- 函数
- 规则嵌套
- 颜色处理
- 条件和循环

我的建议是，在每个项目开始时使用纯 CSS，只有当代码开始变得无法保持 DRY 时，才切换到预处理方案。为了避免可能发生的“依赖”和“滥用”，**在引入预处理器的问题上需要冷静决策**，不应该在每个项目一开始时就不动脑筋顺着惯性来。

## 参考书籍

- 《CSS 揭秘》
- 《CSS 重构：样式表性能调优》
- 《响应式 Web 设计：HTML5 和 CSS3实战》