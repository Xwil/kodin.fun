---
title: 执行上下文
---

## 执行上下文 Execution Context
简单来说，执行上下文就是JavaScript代码执行的环境。在JavaScript中有三种执行上下文：
- **全局执行上下文**
    
    基础执行上下文，所有不在函数内部的代码都在全局执行上下文中。它负责：
    1. 创建全局对象，即浏览器中的window对象。
    2. 将this绑定到全局对象。

    有且只有一个全局对象。
- **函数执行上下文**
  
    每次函数调用时，都会创建一个新的执行上下文，每个函数都有自己的执行上下文。
- **Eval函数执行上下文**
  
    eval函数中的代码有单独的执行上下文，不在本文讨论范围内。


## 调用栈 Execution Stack

代码执行过程中创建的所有执行上下文都存储在调用栈中。

当JS引擎开始执行代码时，会创建一个全局执行上下文中并压入栈底。后续每次执行函数时，创建一个新的执行上下文并压入栈中。

JS引擎会执行栈顶的执行上下文，完成后出栈，然后继续执行下一个执行上下文。

## 执行上下文的创建过程

执行上下文的创建分为两个阶段：创建阶段和执行阶段。

###  创建阶段

执行上下文在创建阶段被创建，这个阶段发生了两件事：
1. **词法环境**(LexicalEnvironment)组件创建。
2. **变量环境**(VariableEnvironment)组件创建。

执行上下文大概是下面这个样子：
```javascript
ExecutionContext = {
    LexicalEnvironment = <内存中词法环境的引用>,
    VariableEnvironment = <内存中变量环境的引用>,
}
```

#### 词法环境

ES6文档中对词法环境的定义如下：

> A Lexical Environment is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code. A Lexical Environment consists of an Environment Record and a possibly null reference to an outer Lexical Environment.

简单来说就是：词法环境是保存标识符-变量映射关系的结构。标识符就是变量/函数名，而变量则是指变量在内存中的地址。

每个词法环境由三部分组成：
- 环境记录 Environment Record
- 外部词法环境的引用 outer
- This绑定

##### 环境记录 Environment Record

环境记录是变量和函数声明存储的地方。

环境记录分为两种：

- **声明性环境记录** Declarative environment record
  
  存储变量和函数的声明。函数的词法环境中包含声明性环境记录
- **对象环境记录** Object environment record

    全局代码的词法环境中包含一个对象词法环境。


##### 外部词法环境的引用

外部词法环境的引用是指，可以访问外层词法环境。

##### This绑定
在全局执行上下文中，this指向全局对象。

在函数执行上下文中，this的指向根据函数调用方式决定。


#### 变量环境

变量环境实际上也是词法环境的一种，在ES6中，二者的不同之处在于：

- 词法环境用于存储函数声明和变量绑定(let和const)。
- 变量环境只存储变量绑定(var)


### 执行阶段

在执行阶段中，JS引擎会执行代码块。



## 参考

- [Understanding Execution Context and Execution Stack in Javascript](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)