//  CommonJs, every file is module (by default)
// modules - Encapsulated Code (only share Minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(names);
const data = require('./6-alternative-flavor')
console.log(data);
require('./7-mind-grenade')

// sayHi("singh")
// sayHi(names.sonali)
// sayHi(names.key)