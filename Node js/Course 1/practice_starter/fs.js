// let sendValue = require("./lib.js");
// let res = sendValue();

// let { a, b } = res;

// function sum() {
//   console.log(`sum is ${a + b}`);
// }

// sum();

// let arry = [45, 35, 24, 67, 43];
// let num = 35;

// import { findTheNumber } from "./lib.js";

// let res = findTheNumber(arry, num);

// function indexofNumber() {
//   console.log(`The index of ${num } is ${res}`);
// }
// indexofNumber();

// --------file system-----

// const fs = require("fs");

//✅ READ
//-- Asynchronous read
// fs.readFile("./sample.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

//-- Synchronous read
// let response=fs.readFileSync('./sample.txt')
// console.log(response.toString())

//✅ CREATE

// fs.writeFile('./sample2.txt',"hello",(err)=>{

//     console.log(err)

// })
// fs.writeFileSync("./sample.txt","hello boss")

//✅ DELETE

// fs.unlink('./sample.txt',(err)=>{
//     console.log(err)
// })

// fs.unlinkSync('./sample2.txt')

//✅ APPEND

// fs.appendFile('./sample.txt'," hello how are you?",(err)=>{
//     console.log(err)
// })

// fs.appendFileSync('./sample.txt'," kill?")

//✅ REPLACE

//sync
// let read= fs.readFileSync('./sample.txt','utf-8');

// data = read.replace("kill", 'stab');

// fs.writeFileSync('./sample.txt',data)
// console.log(read)

// ASync

// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (!err) {
//     data = data.replace("kill", "murder");

//     fs.writeFile("./sample.txt", data, (err) => {
//       console.log(err);
//     });
//   }

//   return err;
// });
