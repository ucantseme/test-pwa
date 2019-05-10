const express = require('express')
const app = express()

app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen('3033', () => {
  console.log('server is listening at port 3033')
})