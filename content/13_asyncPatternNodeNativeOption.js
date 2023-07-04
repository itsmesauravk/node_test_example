const {readFile,writeFile} = require('fs').promises  //this is first methode adding .promises
const util = require('util')

//this is second methode node using this 
const readfilePromise = util.promisify(readFile)
const writefilePromise = util.promisify(writeFile)

// this is third methode 

// const textFile = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,"utf8",(err,data)=>{
//             if (err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })       
//     })
// }
const start = async()=> {
    try{
        // const first = await readfilePromise('./content/first.txt','utf8')  //for second type
        const first = await readFile('./content/first.txt','utf8')
        // const second = await readfilePromise('./content/second.txt','utf8')   //for second type
        const second = await readFile('./content/second.txt','utf8')
        // await writefilePromise('./content/result-mind-granade.txt',`This util feature is awesome : ${first} > ${second}`)  //for second type
        await writeFile('./content/result-mind-granade.txt',`This util feature is awesome : ${first} > ${second}`,{flag:'a'})
        console.log(first,second)
    }catch(error){
        console.log(error)
    }

}
start()
// textFile("./content/first.txt")
//     .then(data => console.log(data))
//     .catch(error =>console.log(error))