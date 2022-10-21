var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  console.log('\nGET 请求-------------------')
  console.log('req.query:', req.query)
  console.log('req.params:', req.params)
  console.log('req.body:', req.body)
  // console.log(req.route)
  console.log('GET 请求 end-------------------\n')
  res.json({
    name: 'get',
    code: 200,
  })
})
app.post('/', (req, res) => {
  console.log('\nPOST 请求-------------------')
  console.log('req.query:', req.query)
  console.log('req.params:', req.params)
  console.log('req.body:', req.body)
  // console.log(req.route)
  console.log('POST 请求 end-------------------\n')

  res.json({
    name: 'post',
    code: 200,
  })
})

const port = 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
