const http = require('http')
const fs = require('fs')
/* const server = http.createServer((req, res) => {
  console.log('req :', req)
  console.log('res :', res)

  if (req.url === '/') {
    res.write('hello world')
  } else {
    res.write('hello' + req.url)
  }
  res.end()
})

server.listen('1111')
console.log('localhost:1111') */

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/html'
  })
  fs.createReadStream('./static/index.html').pipe(res)

  /* res.writeHead(200, {
    'Content-type': 'application/json'
  })
  fs.createReadStream('./static/data.json').pipe(res) */

  /* res.writeHead(200, {
    'Content-type': 'image/jpg'
  })
  fs.createReadStream('./static/img.jpg').pipe(res) */
}).listen(1111)