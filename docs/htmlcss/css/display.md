---
title: display
---

:::note 总结

:::

## block

```css
display: block; /* 将元素设置为块级元素 */
```

块级元素独占一行，默认为填满父级元素宽度，垂直排列。

`div`、`section`、`p`等默认都是块级元素。

## inline

```css
display: inline; /* 将元素设置为行内元素 */
```

行内元素不独占一行，只占据元素边框所包含的空间，水平排列。左右 margin/padding 有效，上下无效。

此外，如果对行内元素设置浮动`float: left/right`，则该行内元素会转换为块级元素，且具有浮动特性。

当对行内元素进行定位`posiiton: absolute/fixed`时，也会把行内元素转换为块级元素。

## inline-block

```css
display: inline-block;
```

行内块元素既具有行内元素水平排列的特点，也具有块级元素能设置宽高的特点。

## none

```css
display: none;
```

`display:none`会将元素隐藏，占据的空间将被释放，像完全不存在一样。

`visibility:hidden`则是依然占据空间，但是隐藏元素。

## grid

```css
display: grid;
```

子元素采用 grid 布局。

## flex

```css
display: flex;
```

子元素采用 flex 布局。

## run-in

TODO

## flow-root

> 元素，无论是内联元素，还是原本就是块级元素，在应用 display:flow-root 声明后，都会变成块级元素，同时这个元素会建立新的块级格式上下文，也就是业界常说的 BFC。

## 参考

-   [display](https://css-tricks.com/almanac/properties/d/display/)
-   [What is the difference between display: inline and display: inline-block?
    ](https://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block)
-   [快速了解 CSS display:flow-root 声明](https://www.zhangxinxu.com/wordpress/2020/05/css-display-flow-root/)
