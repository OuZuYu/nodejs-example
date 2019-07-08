const http = require('http')
const server = http.createServer((req, res) => {
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
console.log('localhost:1111')