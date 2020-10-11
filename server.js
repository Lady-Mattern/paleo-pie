//Dependencies
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;

//Port
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//Database
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/demo-2';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});
// mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
// mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
// // open the connection to mongo
// mongoose.connection.on('open' , ()=>{});

//Middleware
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

// Routes
//localhost:3000 
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

//Listener
app.listen(PORT, () => console.log( 'Listening on port:', PORT));