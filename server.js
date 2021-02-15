// Load necessary modules
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const PORT = process.env.PORT || 3000;

const engines = require("consolidate");

app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

let database, users;

// Serve static files (like css and js from public directory)
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({ extended: false }));

// views or templates path
const views = __dirname + "/views/";

// bcrypt rounds to salt
var BCRYPT_SALT_ROUNDS = 12;

// connect to mongodb database
const MongoClient = require("mongodb").MongoClient;
const url =
	"mongodb+srv://ait:ait@cluster0.4bsqv.mongodb.net/ShreejiEstates?retryWrites=true&w=majority";

MongoClient.connect(
	url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, db) => {
		if (err) throw err;
		database = db.db("ShreejiEstates");
		users = database.collection("users");
		// database.close();
	}
);

// routes for navigation
app.get("/", (req, res) => {
	res.sendFile(path.join(views, "/index.html"));
});

app.get("/signup", (req, res) => {
	res.sendFile(path.join(views, "/signup.html"));
});

app.get("/contactus", (req, res) => {
	res.sendFile(path.join(views, "/contactus.html"));
});

app.get("/partners", (req, res) => {
	res.sendFile(path.join(views, "/partners.html"));
});

app.get("/buy", (req, res) => {
	res.sendFile(path.join(views, "/maps.html"));
});

app.get("/rss", (req, res) => {
	res.sendFile(path.join(views, "/rss.html"));
});

app.post("/login", (req, res) => {
	users.findOne({ email: req.body.lemail }, (usererr, user) => {
		console.log(user);
		if (user) {
			bcrypt.compare(req.body.lpwd, user.hash, (passerr, matched) => {
				if (matched) res.render(path.join(views, "dashboard.html"));
				else console.log(err);
			});
		} else {
			console.log("User not found !");
		}
	});
});

app.post("/register", (req, res) => {
	const name = req.body.sname;
	const email = req.body.semail;
	const password = req.body.spwd;
	const address = req.body.addr;
	const dateofbirth = req.body.dateofbirth;
	//calculate month difference from current date in time
	const year = new Date(
		Date.now() - new Date(dateofbirth).getTime()
	).getUTCFullYear();
	//now calculate the age of the user
	const age = Math.abs(year - 1970);
	if (age < 18) {
		res.render(path.join(views, "/index.html"));
	} else {
		bcrypt.hash(password, BCRYPT_SALT_ROUNDS, (err, hash) => {
			const user = { name, email, hash, address, dateofbirth };
			users.insertOne(user, function (err, res) {
				if (err) throw err;
				console.log("New user registered !!");
			});
		});
		res.render(path.join(views, "/dashboard.html"));
	}
});

app.use(function (req, res, next) {
	res.status(404).sendFile(path.join(views, "error.html"));
});

// listen to the requests on given PORT
app.listen(PORT, () => {
	console.log(
		`NodeJs application started listening http://localhost:${PORT}`
	);
});
