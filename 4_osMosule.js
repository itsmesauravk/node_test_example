//importing built in modules
const os = require('os')

//current user info 
const userInfo = os.userInfo()
// console.log(userInfo)

//system up-time in sec
console.log(`The system up-time is : ${os.uptime()}s`)

const currentOs = {
    release : os.release(),
    osType : os.type(),
    freeMem : os.freemem(),
    totalMem : os.totalmem()
}
console.log(currentOs)