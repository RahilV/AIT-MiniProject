// Load necessary modules
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Serve static files (like css and js from public directory)
app.use(express.static(__dirname + '/public/'));

// views or templates path
const views = __dirname + '/views/';

// connect to mongodb database
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://ait:ait@cluster0.4bsqv.mongodb.net/ShreejiEstates?retryWrites=true&w=majority";

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
	if (err) throw err;
	console.log("Database created!");
	db.close();
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

// listen to the requests on given PORT
app.listen(PORT, () => {
  console.log(`NodeJs application started listening http://localhost:${PORT}`);
});