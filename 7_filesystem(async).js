const { log } = require("console")

const {readFile,writeFile, readFileSync, writeFileSync} = require('fs')
console.log('start....')
readFile("./content/first.txt",'utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile("./content/second.txt",'utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile("./content/result-sync.txt",`Hey this is from async type so first result is : ${first} 
        and second is : ${second}`,(err,result)=>{
            if (err){
                console.log(err)
                return;
            }
            console.log("done with this task")
        })
    })
})
console.log('end..')