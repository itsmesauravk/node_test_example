
const names = require("./2_firstModule_21")   //helps to import from the file name inside require()
// or const {man1,women1} = ''
// console.log(names)  //displays the result in object
const hello = require("./2_firstModule_22")   //neep to pass ./ before file name if module is created by us
// console.log(hello)
const fruits = require('./2_firstModule_alternet')
require('./3_mind-granade_3')  //this also returns the value
// console.log(fruits)
// hello(names.man1)
// hello(names.women1)
