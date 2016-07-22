var test = require('tape')
var routes = require('./routes')

test("routes.index responds with index.html", function(t) {
    var res = {sendFile: sendFile }

    routes.index(null, res)

    function sendFile(file) {
      t.equals(file, __dirname + "/index.html")
      t.end()
    }
})

test("routes.style responds with master.css", function(t) {
    var res = {sendFile: sendFile }

    routes.style(null, res)

    function sendFile(file) {
      t.equals(file, __dirname + "/css/master.css")
      t.end()
    }
})

test('routes.webapps response includes a querystring parameter', function (t) {
  var res = { send: send }
  var req = { query: { name: 'Robin' } }

  routes.webapps(req, res)

  function send (msg) {
    t.equals(msg, 'Robin is building web apps')
    t.end()
  }
})
