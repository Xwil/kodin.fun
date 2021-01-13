---
title: meta标签
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info 总结
meta viewport 标签用于设置 viewport 大小，从而保证能在移动端设备上的显示效果。
:::

## `<meta>`标签

HTML 中的`<meta>`标签用于用于提供页面的元信息(元数据)，比如针对搜索引擎和更新频率的描述和关键词等等。

元数据以键值对的形式定义。

> 元数据（metadata）是用来描述其他数据的数据。例如 HTML 文档是数据，其中的`<head>`标签中就会有一些描述 HTML 文档信息的数据，例如 title, charset 等。

```html title="meta标签"
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
```

## viewport

浏览器中的 viewport 是指浏览器中用来显示网页的可见区域，不包括工具栏，和水平/垂直滚动条。

如下图中所示。

<img alt='viewport 区域' src={useBaseUrl('img/htmlcss/viewport.png')} />

<center>viewport区域</center><br/>

早期网页开发中，由于移动端设备尚未兴起，不需要考虑对移动端设备的适配。

所以最开始移动端渲染页面时，浏览器会将页面渲染到一个虚拟 viewport 中，然后缩放页面到能全部展示。用户通过缩放来浏览页面。

这种情况下，如果网页采用了 media query 进行移动端适配，就会出现问题。举个栗子，如果移动端浏览器的虚拟 viewport 宽度为 980 像素（Safari iOS 浏览器默认宽度）,那么 640px 或 480px 的断点就永远不会触发。

为了解决这个问题，Safari iOS 浏览器引入了 viewport meta 标签，让开发者来控制 viewport 的尺寸和缩放。

```html
<meta
	name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1"
/>
```

以上代码中设置了 viewport 的宽度(`width`)，初始缩放(`initial-scale`)和最大缩放(`maximum-scale`)。

### CSS 像素和设备像素

在 PC 端，1 个 CSS 像素代表 1 个显示器物理像素。

但是在移动端，设备的物理分辨率越来越高（iPhone12: 1170 x 2532 pixels），也出现了像素比（pixel ratio）的概念。

例如下图中，iPad Pro 的像素比为 2，会用 4 个物理像素来显示一个 CSS 像素。

![iPad物理尺寸](https://miro.medium.com/max/1400/1*0_V0oADcCgjnq5NT3bNGuA.png)

### viewport 常用属性

| 属性           | 初始值                     | 最小值 | 最大值 | 合法值                                      | 描述                     |
| -------------- | -------------------------- | ------ | ------ | ------------------------------------------- | ------------------------ |
| width          | 980                        | 200    | 10000  | device-width 或正整数                       | 设置页面宽度             |
| height         | 根据设备 aspect ratio 决定 | 223    | 10000  | device-height 或正整数                      | 设定页面高度             |
| initital-scale | fit to screen              | 0.1    | 10.0   | 浮点数，或 minimum-scale-maximum-scale 之间 | 设置页面初始缩放比例     |
| minimum-scale  | 0.25                       | 0.1    | 10.0   | <= maximum-scale                            | 设置页面初始最小缩放比例 |
| maximum-scale  | 1.6                        | 0.1    | 10.0   | >=minimum-scale                             | 设置页面初始最大缩放比例 |
| user-scalable  | yes                        |        |        | yes/no                                      | 是否允许用户缩放         |

### 常见设置

```html
<meta
	name="viewport"
	content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
/>
```

## 参考

[Using the viewport meta tag to control layout on mobile browsers -- MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

[Responsive Meta Tag -- CSS-Tricks](https://css-tricks.com/snippets/html/responsive-meta-tag/)

[Configuring the Viewport](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html)
