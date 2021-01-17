---
title: 水平居中
---

import Codepen from "react-codepen-embed";

:::info 总结
1. text-align: center
2. margin: 0 auth
3. position
4. flex
:::


## `text-align: center`

text-align:center 只对 inline 和 inline-block 元素有效。

<Codepen hash='vYXvJzr' user='cuvii' height='406'/>


以上代码中，在容器container中设置了`text-align: center`。

容器中有三个子元素，分别是行内元素，块级元素和行内块元素。

- 行内元素： 整个元素居中了
- 块级元素：元素自身没有居中，但元素中的文字居中了
- 行内块元素：元素自身居中，元素中的文字也居中

**优点**：
- 方便

**缺点**：
- 只对行内元素和行内块元素有效，对块元素无效
- 会影响块级子元素中的文字居中



## `margin`

借助margin，可以实现块级元素在父元素中的水平居中效果。
<Codepen hash='gOwZGpy' user='cuvii' height='400'/>


以上代码中，我们对行内元素，块级元素，行内块元素都设置了`margin: "0 auto"`，只有块级元素实现了水平居中。

另外，块级元素还必须设置了非`auto`的`width`属性才能居中。

**优点**：
- 不影响子元素


**缺点**：
- 只适用于块级元素
- 需块级元素的指定宽度

## `position`

通过**绝对定位** + **`left/right`** + **`translateX`**实现水平居中。

## `flex`

通过**`flex`** + **`jusitify-content: center`**实现水平居中。
