// Import libraries
let express = require('express')
var path = require('path');
let apiRoutes = require("./api-routes");
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var cors = require('cors');
let app = express();

// Initialize the app
app.use(cors());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://test:test@cluster0.bhyoa.mongodb.net/quanlytheluc?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
// Check for DB connection
if (!db)
  console.log("Error connecting db")
else
  console.log("Db connected successfully")

// Configure bodyparser to handle post requests (!important)
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Using ng build to create static dist folder then call it from nodejs app
app.use(express.static(path.join(__dirname, 'client/dist/quan-ly-the-luc')));
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '/index.html'));
});
// Restful Api
app.use('/api', apiRoutes)

app.listen(port, () => console.log('App listening on port 3000'));