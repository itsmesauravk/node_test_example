const { log } = require('console')
const {readFileSync,writeFileSync} = require('fs')  //this is another method of importing
//another method of importing is 
// const fs = require('fs')
// fs.readFileSync =

const first = readFileSync("./content/first.txt",'utf8')  //utf8 is for decoding which is also by defult
const second = readFileSync("./content/second.txt",'utf8')

console.log(first, second)
writeFileSync("./content/result-sync.txt",`Hey here is result of 
first file : ${first} 
and result of 
second file : ${second}`,
{flag:'a'})
//if same file name exist it will overwrite that one and if file name not exist it will create new file
// {flag:'a'} appends all the same content after result