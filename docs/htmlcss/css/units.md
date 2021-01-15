---
title: 单位
---

## px

`1px` 实际占用的物理像素不一定真的是一像素。

例如在移动端设备上，如果 `DPI` 为 2，那么 `1px` 会占用 4 个物理像素。

## em/rem

em 和 rem 都是相对单位。

em 是根据当前元素的 `font-size` 决定的。例如当前元素 `font-size` 为 `16px`，那么 `2em` 就是 `32px`。

rem 是根据根元素的`font-size`决定的。

## vw/vh

vw/vh 是相对于视口的尺寸决定的。

vw 表示 viewport width，视口的宽度。例如 50vw 表示视口一半的宽度。
vh 表示 viewport height，视口的高度。例如 50vh 表示视口一半的高度。

## 百分比

百分比也是相对单位，取值对象为父元素。

例如 left, right, margin, padding 是相对于父元素宽度。top，bottom 等则是相对于父元素高度。

```css
.parent {
	width: 400px;
}

.child {
	width: 50%; /* = 200px */
}
```

## 参考

-   [CSS percentage unit, the evil parts](https://ismail9k.medium.com/css-percentage-unit-the-evil-parts-e07417a834ef)
