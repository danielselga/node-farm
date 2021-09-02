const fs = require('fs') 
const http = require('http')
const url = require('url')
const replaceTemplate = require('./modules/replaceTemplate')
const slugify = require('slugify')

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
const tempOverview: string = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'UTF-8')
const tempCard: string = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'UTF-8')
const tempProduct: string = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'UTF-8')
const data: string = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'UTF-8')
const dataObj : Array<object> = JSON.parse(data) //Only will executed once, sync toplevel code.

const server = http.createServer((req : any, res : any) => {

  const { query, pathname } = url.parse(req.url, true)

  const pathName : string = req.url

  //Overview Page
if(pathname === '/' || pathname === '/overview') {
  res.writeHead(200, {'Content-Type': 'text/html'})
  
  const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('')
  const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml)

  res.end(output)
  
  // Product Page
} else if (pathname === '/product') {
  const product = dataObj[query.id] //chamando um objeto especifico baseado num array de de objs.
  res.writeHead(200, {'Content-Type': 'text/html'})
  const output = replaceTemplate(tempProduct, product)
  res.end(output)

  //API
} else if (pathname === '/api') {
  res.writeHead(200, {'Content-Type': 'applicaton/json'})
  res.end(data) // reading the data var witch contains the JSON string.

  //Not Found
} else {

    res.writeHead(404, {'Content-Type': 'text/html', 'my-own-header': 'hello-world'})

    res.end('<h1>ERROR 404</h1>')
}
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000')
})//Server port listener.