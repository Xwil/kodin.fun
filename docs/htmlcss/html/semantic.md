---
title: 语义化
hide_title: true
author: cuvii
date: 2021-01-13
---

:::info 总结

-   正确的内容做正确的事
-   页面内容结构化
-   无 CSS 样式时也能进行阅读
-   方便浏览器、搜索引擎解析，利于 SEO

:::

## HTML 语义化标签

HTML5 中提供了大量语义化标签，其中比较常见的有：

-   `header`： 通常包含页面顶部信息的容器标签，比如本站的导航栏。
-   `footer`： 页脚的容器标签。
-   `main`： 包含页面的主要内容，通常应该是只会出现在这个页面，不会和其他页面重复的内容。
-   `nav`：导航栏，通常在 `header`、`footer` 或者 `aside` 标签中。
-   `section`：用于表示文档中的“节”或者“段”。

    其他可参阅[MDN 文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

## CSS 语义化

CSS 语义化主要是指 `class` 和 `ID` 命名的语义。

CSS 语义化主要是给其他开发者看的，良好的 CSS 命名方式能减少沟通调试和理解成本。

HTML 语义化则主要是给机器（搜索引擎爬虫等）看的。

## ARIA

ARIA 即 Accessible Rich Internet Application，中文译为无障碍富互联网应用。可以为一些有功能障碍（如听力，视力）的人群通过屏幕阅读器例如 voiceover 等，提供无障碍访问动态、可交互 Web 内容。

而应用于 HTML 的 ARIA 有两部分组成：`role` 和 `aria-\*` 。

其中，`role` 标识了一个元素的作用，`aria-`描述了与之有关的事物特征及其状态。

如果使用的元素(HTML5)本身具有语义化，应该使用这些元素，而不用再重新定义一个添加 ARIA 的角色、状态或属性的元素。

`nav` 已经隐含 ARIA 的 `role="navigation"`声明，就不用在

标签上在定义 `role` 或者 `aria` 就能被读屏软件识别。而没有语义化的元素如 `ul` 则推荐使用 `role="navigation"`。
