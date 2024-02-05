// var name = 'ConardLi'
// name.color = 'red';
// console.log(name.color); // undefined

// var name1= new String('ConardLi')
// name1.color = 'red';
// console.log(name1.color); // red

// const obj = { value: 42 };

// function getValue(prefix) {
// console.log(prefix + this.value);
// }

// getValue.call(obj, 'The call value is: '); // 使用 call
// getValue.apply(obj, ['The apply value is: ']); // 使用 apply
// const boundGetValue = getValue.bind(obj, 'The bind value is: '); // 使用 bind
// boundGetValue(); // 稍后调用新函数

// function deepClone(obj, map = new Map()) {
//   if (typeof obj !== 'object') {
//     return obj
//   }
  
//   if (map.get(obj)) {
//     return map.get(obj)
//   }

//   let result = Array.isArray(obj) ? [] : {}

//   map.set(obj,result)

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = deepClone(obj[key],map)
//     }
//   }

//   return result
// }

// // LIS
// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (arr[i] > arr[j]) {
//       dp[i]=max(dp[i],dp[j]+1)
//     }
//   }
// }

// // LCS
// for (let i = 0; i < str1.length; i++) {
//   for (let j = 0; j < str2.length; j++) {
//     if (str1[i] === str2[j]) {
//       dp[i][j] = dp[i-1][j-1]+1
//     }
//     else
//     {
//       dp[i][j] = max(dp[i-1][j],dp[i][j-1])
//     }
//   }
// }

// // 0-1
// for (let i = 0; i < str1.length; i++) {
//   for (let j = 0; j < str2.length; j++) {
//     dp[i][j] = dp[i-1][j]
//     if (j >= wt[i]) {
//       dp[i][j] = max(dp[i-1][j],dp[i-1][j-wt[i]]+val[i])
//     }
//   }
// }

// // total
// for (let i = 0; i < str1.length; i++) {
//   for (let j = 0; j < str2.length; j++) {
//     dp[i][j] = dp[i-1][j]
//     if (j >= wt[i]) {
//       dp[i][j] = max(dp[i-1][j],dp[i][j-wt[i]]+val[i])
//     }
//   }
// }

// function Student() {
//   this.name = 'John Doe';
// }

// Student.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name}.`);
// };

// const student = new Student()

// console.log(student.__proto__); // { sayHello: [Function: sayHello] }


// function deepClone(obj,map = new Map()) {
//   if (typeof obj !== 'object') {
//     return obj
//   }

//   if (map.get(obj)) {
//     return map.get(obj)
//   }

//   let result = Array.isArray(obj) ? [] : {}

//   map.set(obj,result)

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = deepClone(obj[key],map)
//     }
//   }

//   return result
// }


// // 记录回溯算法的递归路径
// const track = [];
// // track 中的元素会被标记为 true
// let used;

// /* 主函数，输入一组不重复的数字，返回它们的全排列 */
// var permute = function(nums) {
//     used = new Array(nums.length).fill(false);
//     backtrack(nums);
//     return res;
// };

// const res = [];

// // 回溯算法核心函数
// function backtrack(nums) {
//     // base case，到达叶子节点
//     if (track.length === nums.length) {
//         // 收集叶子节点上的值
//         res.push([...track]);
//         return;
//     }

//     // 回溯算法标准框架
//     for (let i = 0; i < nums.length; i++) {
//         // 已经存在 track 中的元素，不能重复选择
//         if (used[i]) {
//             continue;
//         }
//         // 做选择
//         used[i] = true;
//         track.push(nums[i]);
//         // 进入下一层回溯树
//         backtrack(nums);
//         // 取消选择
//         track.pop();
//         used[i] = false;
//     }
// }

// // 防抖
// let timerId = null
// function debounce() {
//   if (timerId !== null) {
//     clearTimeout(timerId)
//   }

//   timerId = setTimeout(()=>{
//     console.log('this is debounce');
//   },1000)
// }

// // 节流
// let timerId = null
// function throttle() {
//   if (timerId === null) {
//     timerId = setTimeout(()=>{
//       console.log('this is throttle');
//       timerId = null
//     },1000)
//   }
// }

// 数组扁平化
// function flatten(arr) {
//   const result = []

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result.push(...flatten(arr[i]))
//     }
//     else
//     {
//       result.push(arr[i])
//     }
//   }

//   return result
// }


// const nums=[1,2,3]

// const res = []
// const track = []
// const used = new Array(nums.length).fill(0)

// function backtrack(num) {
//   if (track.length === num.length) {
//     res.push([...track])
//     return
//   }

//   for (let i = 0; i < num.length; i++) {
//     if (used[i]) {
//       continue
//     }

//     used[i] = 1
//     track.push(num[i])
//     backtrack(num)
//     track.pop()
//     used[i] = 0

//   }
// }

// backtrack(nums)
// console.log(res);



// const num=[1,2,3]

// const res = []
// const track = []

// function backtrack(strat) {
//   res.push([...track])

//   for (let i = strat; i < num.length; i++) {
//     track.push(num[i])
//     backtrack(i+1)
//     track.pop()
//   }
// }

// backtrack(0)
// console.log(res);


function mySetInterval(func,delay)
{
  function interval() {
    func()
    setTimeout(interval,delay)
  }
  setTimeout(interval,delay)
}

function myLog() {
  console.log('this is time Interval');
}

mySetInterval(myLog,1000)