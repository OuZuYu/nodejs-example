const express = require('express')
const path = require('path')
const app = express()
const Joi = require('joi')
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
  res.send('hello index')
})

app.get('/example', (req, res) => {
  res.send('hello example')
})

app.get('/example/:name/:age', (req, res) => {
  const params = req.params
  const query = req.query
  res.send(`hello ${params.name}, you are ${params.age} years old --- sort:${query.sort}`)
})


app.use('/public', express.static(path.join(__dirname, 'static')))
app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'))
})



app.use(bodyParser.urlencoded({
  extended: false
}))
app.get('/post', (req, res) => {
  const postPage = path.join(__dirname, 'test-post.html')

  res.sendFile(postPage)
})
app.post('/post', (req, res) => {
  const body = req.body
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).required()
  })

  schema.validate(body, (err, val) => {
    if (err) {
      res.send('您输入的不规范')
    } else {
      res.send(`email: ${body.email} password: ${body.password}`)
    }
  })
})

app.use(bodyParser.json())
app.post('/post-json', (req, res) => {
  res.json({
    success: true
  })
})


app.listen(1111)