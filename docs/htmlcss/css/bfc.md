---
title: BFC
---

## 什么是 BFC

BFC 全称“Block Formatting Context”，既块级格式化上下文。

一个 BFC 是一个单独布局区域，不会影响外部布局，可以解决 `margin` 塌陷，清除浮动等问题。

## 如何触发 BFC

-   `float` 值不为 `none`
-   `overflow` 值为 `auto`|`scroll`|`hidden`
-   `display` 值为 `table-cell`|`table-caption`|`inline-block`|`flex`|`grid`|`flow-root`
-   `position` 值不为 `relative` 或 `static`。

除此之外，根元素 HTML 也是 BFC。

## 扩展

### IFC 内联格式化上下文

### GFC 网格布局格式化上下文

```css
display: grid;
```

### FFC 自适应格式化上下文

```css
display: flex;
```

## 参考

-   [全面分析总结 BFC 原理及实践](https://juejin.cn/post/6844904082226987021)
