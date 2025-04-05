// function sendValue() {
//   let a = 45;
//   let b = 30;

//   return { a, b };
// }

// module.exports = sendValue;

// export function findTheNumber(arry, num) {
//   for (let i = 0; i < arry.length; i++) {
//     if (arry[i] === num) {
//       return i;
//     }
//   }
// }


// http

// const http= require('http');

// let file =require('./dummy.json')

// const data= {age:5};


// const server= http.createServer((req,res)=>{
//     console.log('server started');
//     res.setHeader('Dummy','DummyValue');
//     // res.setHeader('Content-Type','text/html')
//     res.setHeader('Content-Type','application/json')
//     // res.end(JSON.stringify(data.age))
//     res.end(JSON.stringify(file))
// })

// server.listen(8000)
