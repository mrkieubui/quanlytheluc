// Import express
let express = require('express')
var path = require('path');
var serveStatic = require('serve-static');

var port = process.env.PORT || 3000;

// Initialize the app
let app = express();
app.use(express.static(path.join(__dirname, 'client/dist/quan-ly-the-luc')));
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => console.log('App listening on port 3000'));