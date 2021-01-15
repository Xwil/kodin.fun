---
title: 1px问题
---

## 产生原因

我们做移动端页面时一般都会设置`meta`标签`viewport`的`content=“width=device-width”`，
这里就是把html视窗宽度大小设置等于设备宽度的大小，大多数手机的屏幕设备宽度都差不多，
以iphoneX为例，屏幕宽度375px。

而UI给设计图的时候基本上都是给的二倍图甚至三倍图，假设设计图是750px的二倍图，在750px上设计了1px的边框，要拿到375px宽度的手机来显示，就相当于整体设计图缩小了一倍，所以750px设计图里的1px边框在375px手机设备上要以0.5px来呈现才符合预期效果，然而css里最低只支持1px大小，不足1px就以1px显示，所以你看到的就显得边框较粗，实际上只是设计图整体缩小了，而1px的边框没有跟着缩小导致的。

## 解决方案

### 0.5px

在 iOS 系统上，需要一个物理像素宽度的 border 时，可以写成`0.5px`。

```css
border: 0.5px solid red;
```

缺点：仅支持 iOS8 以上，不支持安卓设备。

### 使用图片
缺点：调整麻烦；圆角模糊。

### box-shadow

```css
box-shadow: 0 -1px 1px -1px #e5e5e5,
            1px 0 1px -1px #e5e5e5, 
            0 1px 1px -1px #e5e5e5, 
            -1px 0 1px -1px #e5e5e5;
```

### 伪元素

```css title="1个边框"
.setOnePx{
  position: relative;
  &::after{
    position: absolute;
    content: '';
    background-color: #e5e5e5;
    display: block;
    width: 100%;
    height: 1px; /*no*/
    transform: scale(1, 0.5);
    top: 0;
    left: 0;
  }
}

```

```css title="4个边框"
.setBorderAll{
     position: relative;
       &:after{
           content:" ";
           position:absolute;
           top: 0;
           left: 0;
           width: 200%;
           height: 200%;
           transform: scale(0.5);
           transform-origin: left top;
           box-sizing: border-box;
           border: 1px solid #E5E5E5;
           border-radius: 4px;
      }
    }

```

缺点：使用了after伪元素，可能影响清除浮动。
