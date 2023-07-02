const path = require('path')

console.log(path.sep)   //path seperator

const way =path.join('./content','subfolder','text.txt')   //joins the path name together
console.log(way)
const base = path.basename(way)   //shows the path and last folder/files of the path     
console.log(base)

const absolute = path.resolve(__dirname, 'content','subfolder','text.txt')  //show the absoulute path form start
console.log(absolute)   //__dirname is path until the current folder node.