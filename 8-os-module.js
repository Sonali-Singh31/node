const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime
console.log(`The System Uptime is ${os.uptime}s`);

const currentOS = {
    name:os.type(),
    totalMen: os.totalmem(),
    release: os.release(),
    freeMen : os.freemem(),
}
console.log(currentOS);