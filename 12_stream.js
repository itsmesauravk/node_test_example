const { createReadStream } = require('fs')   //createReadStream is for large file 

const stream = createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'})   //highwatermark is size in 90000=90kb
// path => for path of big file   >> highwatermark is to seprate file with the size 
// first 90kb will display and left will display
// encoding is for displaying readeable file
// for this example big.txt doesnot exist

//default 64kb
//last buffer - remainder
//highWaterMark => control size

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})