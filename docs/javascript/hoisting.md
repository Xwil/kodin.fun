---
title: 提升
---

javaScript引擎在运行代码之前，会先编译代码。在编译过程中会扫描函数和变量声明，并添加到内存中。

内存中用于存储这些数据的区域叫做**词法环境（Lexical Environment）**。所以，当真正运行代码时，就可以提前访问或调用一些函数和变量了。

<!--truncate-->


```javascript

// 调用在定义之前
sayHi();

function sayHi(){
    console.log('hi')
}

```

## 词 法 环 境

词法环境是一种保存**标识符-变量映射**的数据结构。（标识符是指变量/函数的名字，变量是指实际值）。
```javascript
LexicalEnvironment = {
    Identifier: <value>,
    Identifier: <function object>
}
```

换句话说，**词法环境就是程序运行时存储变量和函数的地方**。

所以总结一下，JavaScript引擎会在编译阶段扫描代码中的变量和函数声明，并保存到词法环境中。

接下来就看看变量和函数声明是怎样提升的。

## `var`的提升过程

```javascript
console.log(a); // "undefined"
var a = 3;
```

结果是`undefined`，而不是3。不是说好的提升了吗？

因为**只有声明发生了提升，赋值并没有**。也就是说，`var a`提升了，但是赋值语句`= 3`这部分并没有提升，还留在原处。

另外一个问题，为什么a的指是`undefined`呢？

当JS引擎在编译阶段找到通过`var`声明的变量时，会把这个变量添加到词法环境中，赋值为`undefined`。

直到真正运行到赋值的那行代码，才会进行赋值，a的值才会是3。

## `let`和`const`的提升

```javascript
console.log(a); // ReferenceError: a is not defined
let a = 3;
```

很多人学习JavaScript时，只记住了`var`是会提升的，忽略了`let`和`const`。

那么`let`和`const`会提升吗？

答案是：会。但是和`var`的提升不太一样。

<mark>所有声明（`function`，`var`，`let`，`const`，`class`）都会发生提升。`var`声明会初始化为`undefined`，而`let`和`const`会保持未初始化的状态。</mark>

当JS引擎执行到`let`和`const`声明的那一行代码时，才会进行初始化。所以不能在声明之前调用`let`/`const`的变量。这就是**暂时性死区(Temporal Dead Zone, TDZ)**。

如果只声明了变量，但没有赋值。那么变量的值会是`undefiend`，或者报错(如果是用`const`声明的)。


## 函数的提升

```javascript
sayHi();    // ok
// 函数声明
function sayHi(){
    ...
}

sayBye();   // Cannot access 'sayBye' before initialization 

// 函数表达式
const sayBye = function(){
    ...
}

```

函数的提升需要额外注意一点，函数声明是整个都会提升。而函数表达式，则是根据var/let/const的规则来进行的。

## 类的提升

```javascript

let cuvii = new Person(); // Cannot access 'Person' before initialization

class Person{
    ...
}

const liith = new Student(); // Cannot access 'Student' before initialization

const Student = class {
    ...
}

```

与函数声明/函数表达式的规则不同，类声明/类表达式都会发生提升，但是，类声明不会完整提升，提前调用依然会进入暂时性死区。


## 参考

- [let - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Hoisting in Modern JavaScript — let, const, and var](https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda)
- [浏览器中的JavaScript执行机制](https://time.geekbang.org/column/intro/216)