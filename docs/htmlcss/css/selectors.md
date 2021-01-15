---
title: 选择器
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## 选择器

### 基础选择器

-   元素选择器
-   类选择器
-   ID 选择器
-   通配符选择器

### 组合选择器

-   后代选择器
-   子元素选择器
-   相邻兄弟选择器
-   通用兄弟选择器
-   交集选择器
-   并集选择器

### 伪类和伪元素选择器

#### 标记状态的伪类

-   `:link`
-   `:visited`
-   `:hover`
-   `:active`
-   `:focus`

#### 筛选功能的伪类

-   `:empty`
-   `:checked`
-   `:disabled`
-   `:first-child`
-   `:last-child`
-   `:nth-child(an+b)`
-   `:nth-last-child(an+b)`
-   `:only-child`
-   `:only-of-type`

#### 伪元素选择器

-   `::first-line`
-   `::first-letter`
-   `::before`
-   `::after`
-   `::selection`

## 选择器权重和优先级

-   `!important`
-   行内样式
-   ID 选择器：权重为 100
-   类/伪类/属性选择器：权重为 010
-   元素/伪元素/标签选择器：权重为 001

<img
alt="Docusaurus with Keytar"
src={useBaseUrl('img/htmlcss/specifishity.png')}
/>;

## 相关资源

-   [CSS Diner](https://flukeout.github.io/)
-   [256 个 class 选择器可以干掉 1 个 id 选择器](https://www.zhangxinxu.com/wordpress/2012/08/256-class-selector-beat-id-selector/)
