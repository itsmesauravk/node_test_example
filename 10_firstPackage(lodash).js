const _ = require('lodash')   // _ => all

const item = [1,[2,[3,[4]]]]
const newItem = _.flattenDeep(item)    //makes the same array [1,2,3,4]
console.log(newItem)   