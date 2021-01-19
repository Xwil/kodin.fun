---
title: Async/await 和 Generator
---

ES6带来了Promise及其链式调用来解决回调地狱的问题，但是并不完美：
- 每个.then()方法中还是需要回调函数。
- 不能使用try/catch进行错误处理，要用catch()方法。
- 同时执行多个promise时写法会很难受。

ES8引入了Async函数来解决这些问题。

## Async函数

Async函数并不是一个全新的概念，依然是依赖于promise的，只是写法更自然，更像写普通函数。

```javascript
// With function declaration
async function myFn() {
  // await ...
}
// With arrow function
const myFn = async () => {
  // await ...
}
function myFn() {
  // await fn(); (Syntax Error since no async) 
}
```

只需要在普通函数前加上`async`关键字就可以了。

Async函数可以用在对象方法、类方法等场景，类构造函数和getter/setter不支持async函数。

```javascript
// As an object's method
const obj = {
  async getName() {
    return fetch('https://www.example.com');
  }
}
// In a class
class Obj {
  async getResource() {
    return fetch('https://www.example.com');
  }
}
```

## Async函数和普通函数

Async函数和普通函数的不同之处在于：
- Async函数会返回promise。
- Async函数遇到await会暂停。

### Async函数返回promise
```javascript
async function fn() {
  return 'hello';
}
fn().then(console.log)
// hello
```

函数fn返回了`hello`。因为fn是async函数，所以返回值hello被封装到promise中了。

等价于以下代码：

```javascript
function fn() {
  return Promise.resolve('hello');
}
fn().then(console.log);
// hello
```

更准确一点的说法应该是：async函数的函数体被封装到一个Promise中了。

如果返回值是原始值，async函数会将返回值用promise封装。如果返回值就是一个promise对象，结果会是一个新的promise。

那如果在async函数中抛出一个错误呢？

```javascript
async function foo(){
    throw Error('bar');
}

foo().catch(console.log);
```

这个时候async函数会返回一个状态是rejected的promise（如果没有捕获错误的情况下）。

所以总的来说，不管async函数中返回值是什么，拿到的结果都会是一个promise

```javascript
async function fn(){
}

console.log(fn() instanceof Promise); // true
```

### Async函数遇到await会暂停

```javascript
async function getUserData(userId){
    const result = await fetchUserData(userId);
    return result;
}
```

Async函数一般会配合await来使用。await语句后是一个表达式。

如果表达式是一个promise，函数会暂停，直到promise被resolved。

如果表达式不是promise，会通过`Promise.resolve`转换为promise，然后resolved。


## Async函数和Generator

### Generator

```javascript
function *numberGenerator(){
    yield 5;
    yield 7;
    return 11;
}

const generator = numberGenerator();

console.log(generator.next());      // { value: 5, done: false } 
console.log(generator.next());      // { value: 7, done: false } 
console.log(generator.next());      // { value: 11, done: true } 
```

Generator函数可以返回多个值，每遇到yield都会暂停执行，直到调用`next()`方法。

Generator函数的具体实现是：调用函数时，并没有真正执行函数中的代码，而是返回一个Generator对象，功能类似于迭代器（iterator），每个yield和return的结果都在Generator对象中。后续每次调用`next()`时，返回一个结果。

而调用`next()`方法时，会执行**一部分**代码，也就是下一个yield或return之前的代码。`next()`方法的返回值是一个包含value和done的对象。


### 回到Async函数

Async函数和Generator函数类似，都具有**暂停**的功能。

```javascript

function* generator(){
  // 假设 getUsers()返回值为cuvii;
  const users = yield getUsers();
  return (users + "done")
}

const iterator = generator();
// 
const iteration = iterator.next();

// iteration => {value: Promise {}, done: false}

iteration.value.then(result=>{
  // result => "cuvii"

  const nextIteration = iterator.next(result);
  // nextIteration => {value: "cuvii done", done: true}
})

```

## 参考

- [Async-Await ≈ Generators + Promises](https://medium.com/hackernoon/async-await-generators-promises-51f1a6ceede2)
- [How to escape async/await hell](https://medium.com/free-code-camp/avoiding-the-async-await-hell-c77a0fb71c4c)
- [Deeply Understanding JavaScript Async and Await with Examples](https://blog.bitsrc.io/understanding-javascript-async-and-await-with-examples-a010b03926ea)
- [The Hidden Power of ES6 Generators: Observable Async Flow Control](https://medium.com/javascript-scene/the-hidden-power-of-es6-generators-observable-async-flow-control-cfa4c7f31435)
- [Modern Javascript and Asynchronous Programming: Generators/Yield vs. Async/Await](https://medium.com/front-end-weekly/modern-javascript-and-asynchronous-programming-generators-yield-vs-async-await-550275cbe433)
- [Implementing Async And Await With Generators](https://medium.com/free-code-camp/how-to-implement-async-and-await-with-generators-11ab0859010f)
- [How JavaScript Async/Await Works Under the Hood](https://medium.com/siliconwat/how-javascript-async-await-works-3cab4b7d21da)
- [JavaScript Symbols, Iterators, Generators, Async/Await, and Async Iterators — All Explained Simply](https://medium.com/free-code-camp/some-of-javascripts-most-useful-features-can-be-tricky-let-me-explain-them-4003d7bbed32)
- [Understanding Generators in ES6 JavaScript with Examples](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)