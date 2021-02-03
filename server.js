// Load necessary modules
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 3000;

let database;

// Serve static files (like css and js from public directory)
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({extended: false}));

// views or templates path
const views = __dirname + '/views/';

// bcrypt rounds to salt
var BCRYPT_SALT_ROUNDS = 12;

// connect to mongodb database
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://ait:ait@cluster0.4bsqv.mongodb.net/ShreejiEstates?retryWrites=true&w=majority";

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
	if (err) throw err;
	database = db.db('ShreejiEstates');
	// database.close();
});

// routes for navigation
app.get('/', (req, res) => {
    res.sendFile(path.join(views, '/index.html'));
});

app.get('/signup', (req, res) => {
	res.sendFile(path.join(views, '/signup.html'));
});

app.get('/contactus', (req, res) => {
	res.sendFile(path.join(views, '/contactus.html'));
});

app.get('/partners', (req, res) => {
	res.sendFile(path.join(views, '/partners.html'));
});

app.get('/buy', (req, res) => {
	res.sendFile(path.join(views, '/maps.html'));
});

app.get('/rss', (req, res) => {
	res.sendFile(path.join(views, '/rss.html'));
});

app.post('/login', (req, res) => {
	const email = req.body.lemail;
	const password = req.body.lpwd;

	bcrypt.compare('somePassword', hash, (err, res) => {
		if(res) {
			// Passwords match
		} else {
			// Passwords don't match
		} 
	});
});

app.post('/register', (req, res) => {
	const name = req.body.sname;
	const email = req.body.semail;
	const password = req.body.spwd;
	const address = req.body.addr;
	bcrypt.hash(password, BCRYPT_SALT_ROUNDS, (err, hash) => { 
		const user = { name, email, hash, address };  
		database.collection("users").insertOne(user, function(err, res) {  
			if (err) throw err;  
			console.log("New user registered !!"); 
		});
	});
});

// listen to the requests on given PORT
app.listen(PORT, () => {
  console.log(`NodeJs application started listening http://localhost:${PORT}`);
});