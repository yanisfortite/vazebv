var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080, () => {
  console.log('Serveur HTTP en écoute sur le port 8080');
});