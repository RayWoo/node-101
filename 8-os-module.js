const os = require('os')

const user = os.userInfo()
console.log(user);


console.log(`Uptime ${os.uptime()}`)

const currentOS={
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)


/*
// Modules
const name = require('./4-name')
const sayHi = require('./5-utilis')




sayHi('susan')
sayHi(name.john)
sayHi(name.peter)
//sayHi(secret)
*/