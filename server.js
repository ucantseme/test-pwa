const express = require('express')
const app = express()

app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + '/index.html')
})
app.get('/b', (req, res) => {
  res.sendFile(__dirname + '/b.html')
})
app.get('/skeleton', (req, res) => {
  res.sendFile(__dirname + '/skeleton.html')
})

app.listen('3033', () => {
  console.log('server 3033')
})