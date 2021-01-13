---
hide_title: true
---

:::info 总结
浏览器根据 `DOCTYPE` 确定使用标准模式还是怪异模式渲染页面。
:::

在早期 Web 开发中，页面通常以两种版本编写：网景浏览器和 IE 浏览器。

后来当 W3C 推出 Web 标准时，浏览器厂商为了避免影响已有的页面，推出了两种模式。

现如今浏览器的布局引擎使用的模式有三种：

-   混杂模式/怪异模式：兼容 Navigator 4 和 IE5 的非标准行为。
-   近标准模式：兼容少数的混杂行为，可以理解为过渡模式。
-   标准模式：只兼容符合 HTML/CSS 规范的行为。

## DOCTYPE

浏览器会根据页面顶部的 DOCTYPE 来决定使用怪异模式还是标准模式。

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Hello World!</title>
	</head>
	<body></body>
</html>
```

**使用`!<DOCTYPE html>`能阻止浏览器在渲染文档时进入怪异模式，让浏览器尽可能使用遵循规范的模式来渲染。**

## XHTML

对于 XHTML 文件来说，不需要指定`!<DOCTYPE html>`，因为 XHTML 文件默认就是使用标准模式进行渲染。
