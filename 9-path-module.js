// Buit-in module : Path module
const path = require('path')

// return the path seperator
console.log(path.sep)

// return a path to a file (whatever is the so seperator)
const pathToFile = path.join('content', 'subfolder', 'test.txt')
console.log(pathToFile)

// return the base name of the file we created
console.log(path.basename(pathToFile))

// return the absolute path 
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutePath)