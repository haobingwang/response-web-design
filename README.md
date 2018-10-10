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