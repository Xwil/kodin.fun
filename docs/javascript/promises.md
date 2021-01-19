---
title: Promise
---

JavaScript 是单线程语言，不能同时执行多个任务。在 ES6 之前，一般通过回调（callback）来处理异步任务。

ES6 中引入了 Promise，避免回调地狱问题。

## 什么是 Promise

`Promise`是一个对象，有三种状态：

-   `pending`未完成
-   `resolved`/`fulfilled`：执行成功
-   `rejected`：执行失败

## 创建 Promise

```javascript
const promise = new Promise((resolve, reject)=>{
    ...
})
```

通过 Promise 构造函数可以创建一个 Promise。需要传入一个回调函数作为参数，返回值是一个 promise。

回调函数中的代码执行成功，得到了预期的结果时，调用 resolve 函数，让 promise 成为 resolved/fulfilled 状态。如果执行异常或失败，则调用 reject 方法，让 promise 成为 rejected 状态。

```javascript
const promise = new Promise((resolve, reject) => {
    ... // 执行某些异步调用
    if(allWentWell) {
      resolve('All things went well!');
    } else {
      reject('Something went wrong');
    }
});
```

resolve 和 reject 接收一个参数，可以是字符串，数字，布尔值，数组或对象。

一个 promise 的状态只能变更一次，如果先 resolve 之后再 reject，reject 会是无效的。

```javascript
const promise = new Promise((resolve, reject) => {
	resolve();
	reject(); // 无效
});
```

## 使用 Promise

我们可以通过`then()`和`catch()`方法来使用 promise。

```javascript
const promise = new Promise((resolve, reject)=>{
    ... // 执行某些异步调用
    if(allWentWell) {
      resolve('All things went well!');
    } else {
      reject('Something went wrong');
    }
})

promise.then((data)=>{
  console.log('执行成功')
},(error)=>{
  console.log('执行失败')
})
```

`promise.then(successCallback, failureCallback)`会在 promise 被 resolve 或者 reject 之后调用。如果被 resolve，调用 successCallback; 如果 reject，则调用 failureCallback。

`promise.catch(failureCallback)`可以用于处理错误。实际上 catch 就是`then(null, failureCallback)`的语法糖。

```javascript
promise
	.then((data) => {
		console.log('执行成功');
	})
	.catch((error) => {
		console.log('执行失败');
	});
```

## Promise 嵌套

`then()`和`catcg()`方法会返回一个新的 promise，所以可以实现 promise 嵌套调用。

```javascript
const promise1 = new Promise((resolve, reject) => {
	resolve('Promise1 resolved');
});

const promise2 = new Promise((resolve, reject) => {
	resolve('Promise2 resolved');
});

const promise3 = new Promise((resolve, reject) => {
	reject('Promise3 rejected');
});
promise1
	.then((data) => {
		console.log(data); // Promise1 resolved
		return promise2;
	})
	.then((data) => {
		console.log(data); // Promise2 resolved
		return promise3;
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error); // Promise3 rejected
	});
```

## Promise.all()

## Promise.allSettled()

## Promise.race()

## Promise.any()
