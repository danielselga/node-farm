const fs = require('fs')


// Blocking, sync way
const textIn = fs.readFileSync('./txt/input.txt', 'UTF-8')

console.log(textIn)

const textOut = `This is what we know about the avocao: ${textIn}. \nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut)
console.log('File written')

//  Non-block async way
fs.readFile('./txt/start.txt', 'UTF-8')