const express = require('express')
const mustache = require('mustache-express')
const data = require('./data.js')
const app = express()

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', './views')
app.use(express.static('public'))

app.get('/index', function (req, res) {
  var users = data.users
  res.render('index', {users: users})
})

app.listen(3000, function () {
  console.log('Go to host:3000')
})

// res.send(data.users)
