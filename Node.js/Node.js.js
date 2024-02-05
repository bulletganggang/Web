const fs = require('fs')
const path = require('path')
// console.log(path.join(__dirname,'../test.txt'));

// fs.writeFile('test.txt', '778', err => {
//   if (err) console.log(err)
//   else console.log('111');
// })

// fs.readFile(path.join(__dirname, 'test.txt'), (err, data) => {
//   fs.writeFile('114514.txt', data.toString().replace(/[\r\n ]/ig, ''), err => {
//     console.log(err);
//   })
// })

/* -------------------------------------------------------------------------- */

const http = require("http")
const server = http.createServer()

// server.on('request', (req, res) => {
//   因为res.end()向客户端发送中文可能导致乱码，需要设置Header
//   res.setHeader('Content-Type', 'text/plain;charset=utf-8')
//   res.end('778')
// })

// server.listen(3000, () => {
//   console.log(123);
// })


/* -------------------------------------------------------------------------- */

const obj = require('./utils.js')
console.log(obj);
console.log(obj.getArraySum([1, 2, 3]));

// import obj from './utils.js'
// console.log(obj.getArraySum([1,1,4,5,14]));

// import { getArraySum } from "./utils.js"

// console.log(getArraySum([1, 1, 4, 5, 1, 4]));


/* -------------------------------------------------------------------------- */

// console.log(778)

