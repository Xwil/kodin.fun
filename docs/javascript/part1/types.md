---
title: 类型
---

## 1. 内置类型

1.  `Number`
2.  `String`
3.  `Boolean`
4.  `Null`
5.  `Undefined`
6.  `Symbol`
7.  `BigInt`
8.  `Object`
    - `Function`
    - `Regex`
    - `Date`
    - `Array`
    - ...

其中`Object`为引用类型，剩下七个都是值类型。

<br/>



## 2. 类型判断

### typeof

`typeof`只能准确判断值类型。

对于引用类型，只能判断Object和Function。无法准确判断Array等的类型。



```javascript
console.log(typeof '')						// "string"
console.log(typeof true);					// "boolean"
console.log(typeof 1);						// "number"
console.log(typeof NaN);					// "number"
console.log(typeof Infinity);				// "number"
console.log(typeof Symbol());				// "symbol"
console.log(typeof null);					// "object"   ! bug
console.log(typeof undefined);				// "undefined"
console.log(typeof []);						// "object"   ! 无法准确判断
console.log(typeof {});						// "object"
console.log(typeof function(){});			// "function"
console.log(typeof new Date());				// "object"   ! 无法准确判断
console.log(typeof new RegExp());			// "object"   ! 无法准确判断
```

:::info  typeof null

typeof存在一个bug，`typeof null`会返回`"object"`。

是因为在JavaScript第一个版本中，值是以类型标签+值表示的。

object的类型标签是0，而null使用空指针(0x00)表示的，也是0。所以typeof null会返回`"object"`。



来源：[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)

:::

<br/>

### instanceof

`instanceof`用来判断A是否为B的实例，例如`A instanceof B`。

instanceof会根据原型链来检测。

```javascript
console.log([] instanceof Array);    // true
console.log([] instanceof Object);   // true
```

由于Array和Object都出现在`[]`的原型链上，所以判断都为true。因此，**instanceof只能判断两个对象是否属于实例关系，而不能判断一个对象实例具体属于哪种类型。**

<br/>

另外，instanceof 操作符的问题在于，它假定只有一个全局执行环境。如果网页中包含多个框架，那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的构造函数。如果你从一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数。

```javascript
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[0].Array;
var arr = newxArray(1,2,3); // [1,2,3]
arr instanceof Array; // false
```

针对数组的这个问题，ES5 提供了 `Array.isArray()` 方法 。该方法用以确认某个对象本身是否为 Array 类型，而不区分该对象在哪个环境中创建。

```javascript
if(Array.isArray(value)){
   //对数组执行某些操作
}
```

Array.isArray() 本质上检测的是对象的 `[[Class]]` 值，`[[Class]]` 是对象的一个内部属性，里面包含了对象的类型信息，其格式为 [object Xxx] ，Xxx 就是对应的具体类型 。对于数组而言，`[[Class]]` 的值就是 [object Array] 。

<br/>



### constructor

函数的原型prototype中会有一个constructor属性，这个属性指向函数本身。

当该函数作为构造函数调用时，会创建一个新的实例。根据原型链的规则，实例可以访问到原型对象constructor属性。通过这种方式，就可以实现利用constructor来判断类型了。

```javascript
function Person(){}

const p1 = new Person();

console.log(p1.constructor === Person);
```



### Object.prototype.toString.call()

toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。

对于 Object 对象，直接调用 toString() 就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。

```javascript
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(Symbol()); //[object Symbol]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(newFunction()) ; // [object Function]
Object.prototype.toString.call(newDate()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(newRegExp()) ; // [object RegExp]
Object.prototype.toString.call(newError()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用
```





<br/>

## 3. 类型转换

<br/>

## 4. null和undefined



## 参考

- [判断JS数据类型的四种方法](https://www.cnblogs.com/onepixel/p/5126046.html)







