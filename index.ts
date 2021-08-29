const fs = require('fs') 
const http = require('http')

//// Files

// // Blocking, sync way
// const textIn: string = fs.readFileSync('./txt/input.txt', 'UTF-8')

// // console.log(textIn)

// const textOut: string = `This is what we know about the avocao: ${textIn}. \nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// // console.log('File written')

// //  Non-block async way
// fs.readFile('./txt/start.txt', 'UTF-8', (err: string, data1: string) => {
//     if (err) return console.log('ERROR!!!')

//     fs.readFile(`./txt/${data1}.txt`, 'UTF-8', (err: string, data2: string) => {
//         fs.readFile(`./txt/append.txt`, 'UTF-8', (err: string, data3: string) => {
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'UTF-8', (err: string) => {
//                 console.log('Your File has been written')
//             })
//         })
//     })
// })

// console.log('will read file')

//// Server
const server = http.createServer((req : object, res : any) => {
    res.end('Hello from the server')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000')
})//Server port listener.