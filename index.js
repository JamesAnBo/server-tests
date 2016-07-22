var express = require('express')
var routes = require('./routes')

var PORT = 3006
var app = express()

app.get('/', routes.index)
app.get('/css', routes.style)
app.get('/webapps', routes.style)

app.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})
