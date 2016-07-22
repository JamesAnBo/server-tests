module.exports = {
  index: index
}
function index (req, res) {
  res.sendFile(__dirname + '/index.html')
}
