// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import cors
let cors = require('cors');
// Import Mongoose
let mongoose = require('mongoose');

// Initialise the app
let app = express();
const serverless = require('serverless-http');

// Import routes
let apiRoutes = require("./api-routes");

app.use(cors());

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
// mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});


const env = process.env.NODE_ENV || 'development';

if(env === 'test'){
    process.env.MONGODB_URI = 'mongodb://localhost/resthub'
  } else {
    process.env.MONGODB_URI = require("./keys").mongoURI;
  }


mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

// Setup server port
var port = process.env.PORT || 6000;


// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

module.exports = app.listen(3000, () => console.log("API listening to port 3000"));
module.exports.handler = serverless(app);