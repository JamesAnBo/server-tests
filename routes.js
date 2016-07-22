module.exports = {
  index: index,
  style: style,
  webapps: webapps
}
function index (req, res) {
  res.sendFile(__dirname + '/index.html')
}
function style (req, res) {
  res.sendFile(__dirname + '/css/master.css')
}
function webapps (req, res) {
  res.send(req.query.name + ' is building web apps')
}
