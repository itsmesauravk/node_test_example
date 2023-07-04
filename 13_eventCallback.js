// event module
const eventEmitter = require('events')

const currentEvent = new eventEmitter()  //assigning to variable
currentEvent.on('response',()=>{
    console.log("events works sucessfully")
})
currentEvent.on('response',(name,age)=>{
    console.log(`event again works sucessfully with name: ${name} of age: ${age} `)
})
currentEvent.emit('response','John',32)  //this should be at last