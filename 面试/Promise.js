// 手写promise代码
class CustomPromise {
  constructor(executor) {
    this.state = 'pending'; // 初始状态为 pending
    this.value = undefined; // 保存 resolve 的值
    this.reason = undefined; // 保存 reject 的原因
    this.onResolvedCallbacks = []; // 存储成功态回调
    this.onRejectedCallbacks = []; // 存储失败态回调

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'; // 状态变更为 fulfilled
        this.value = value; // 存储成功的值
        this.onResolvedCallbacks.forEach((callback) => callback(value)); // 执行所有成功态回调
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'; // 状态变更为 rejected
        this.reason = reason; // 存储失败的原因
        this.onRejectedCallbacks.forEach((callback) => callback(reason)); // 执行所有失败态回调
      }
    };

    // 执行传入的 executor 函数，传入 resolve 和 reject 作为参数
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error); // 如果 executor 执行出错，直接执行 reject
    }
  }

  then(onFulfilled, onRejected) {
    // 创建新的 Promise 实例
    const newPromise = new CustomPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        // 如果当前状态是 fulfilled，则执行成功态回调 onFulfilled
        // 并将其返回值作为新 Promise 的 resolve 值
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }

      if (this.state === 'rejected') {
        // 如果当前状态是 rejected，则执行失败态回调 onRejected
        // 并将其返回值作为新 Promise 的 reject 值
        try {
          const result = onRejected(this.reason);
          reject(result);
        } catch (error) {
          reject(error);
        }
      }

      if (this.state === 'pending') {
        // 如果状态是 pending，则将成功态回调和失败态回调存储起来
        this.onResolvedCallbacks.push((value) => {
          try {
            const result = onFulfilled(value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });

        this.onRejectedCallbacks.push((reason) => {
          try {
            const result = onRejected(reason);
            reject(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    });

    return newPromise; // 返回新的 Promise 实例，支持链式调用
  }

  catch(onRejected) {
    return this.then(null, onRejected); // catch 实际上是 then 的语法糖
  }
}


// promise.all()
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return 'Arguments must be an array';
    }

    const results = [];
    let completedPromises = 0;

    promises.forEach((promise) => {
      if (promises.length === 0) {
        resolve(results); // 如果传入的数组为空，则直接解决
      }

      Promise.resolve(promise)
        .then((result) => {
          results.push(result)
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch(reject); // 如果有 Promise 失败，则直接将整个 Promise.all 失败
    });
  });
}
