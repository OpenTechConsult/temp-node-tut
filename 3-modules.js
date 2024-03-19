// Modules - Encapsulated code (only share minimum)
// CommonJS - Every file is a module (by default)
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
 
require('./7-mind-grenade')

// sayHi('Susan')
// sayHi(john)
// sayHi(peter)