// Buit-in module : FS module: interacting with the file system
// two flavors : asynchronously and synchronously
const { readFileSync, writeFileSync } = require('node:fs')
const { join } = require('node:path')

console.log('start');
const first = readFileSync(join(__dirname, 'content', 'first.txt'), 'utf8')
const second = readFileSync(join(__dirname, 'content', 'second.txt'), 'utf8')

console.log(first)
console.log(second)

// create file using writeFileSync
writeFileSync(join(__dirname, 'content', 'result-sync.txt'), 
`Here is the result: ${first}, ${second}`,
{flag: 'a'})
console.log('done with this task')
console.log('starting the next one')