// just examples only 
// console.log("hello world")
// console.log("its working yeahhh")   ///using nodemon helps to run code automatically...

//example for event loop

//example 1
const {readFile} = require('fs')

console.log("started")   //logs out first
//check the file path
readFile("./content/first.txt","utf8",(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)  //logs out third
    console.log("completing task")  //logs out fourth
})
console.log("task completed ")  //logs out second

//;this is async function

//example 2

console.log("first")  //this willl log out first
setTimeout(()=>{
    console.log("second")  // this will log out third
},0)
console.log("third")  //this will log out second
// this is async function