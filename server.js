// Load necessary modules
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

let database, users, properties;

// Serve static files (like css and js from public directory)
app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(cors());

// bcrypt rounds to salt
var BCRYPT_SALT_ROUNDS = 12;

// connect to mongodb database
const MongoClient = require("mongodb").MongoClient;
const url =
	"mongodb+srv://rahil_jv:1234@cluster0.sjckd.mongodb.net/ShreejiEstates?retryWrites=true&w=majority";

MongoClient.connect(
	url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, db) => {
		if (err) throw err;
		database = db.db("ShreejiEstates");
		users = database.collection("users");
		properties = database.collection("properties");
		// database.close();
	}
);

app.post("/login", (req, res) => {
	console.log(req.body);
	const email = req.body.email;
	const password = req.body.password;
	users.findOne({ email: email }, (err, user) => {
		if (user) {
			bcrypt.compare(password, user.hash, (err, matched) => {
				if (matched)
					res.status(200).send({ message: "You are validated !!" });
				else res.status(401).send({ message: "Incorrect Password !!" });
			});
		} else {
			console.log("User Not Found !!");
			res.status(401).send({
				message: "You are not registered. Please register first !!",
			});
		}
	});
});

app.post("/signup", (req, res) => {
	console.log(req.body);
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const email = req.body.email;
	const password = req.body.password;
	const gender = req.body.gender;
	const dateofbirth = req.body.dateofbirth;
	const addrline1 = req.body.addrline1;
	const addrline2 = req.body.addrline2;
	const state = req.body.state;
	const district = req.body.district;
	const city = req.body.city;
	const areacode = req.body.areacode;
	const phonenumber = req.body.phonenumber;
	//calculate month difference from current date in time
	const year = new Date(
		Date.now() - new Date(dateofbirth).getTime()
	).getUTCFullYear();
	//now calculate the age of the user
	const age = Math.abs(year - 1970);
	if (age < 18) {
		console.log("Age must be greater than 18 years !");
		res.status(401).send({ err: "Age must be greater than 18 years !" });
	} else {
		bcrypt.hash(password, BCRYPT_SALT_ROUNDS, (err, hash) => {
			const user = {
				firstname,
				lastname,
				email,
				hash,
				gender,
				dateofbirth,
				addrline1,
				addrline2,
				state,
				district,
				city,
				areacode,
				phonenumber,
			};

			users.insertOne(user, function (err, res) {
				if (err) throw err;
				console.log("New user registered !!");
			});
		});
		res.status(200).send({ message: "New user registered !!" });
	}
});

// listen to the requests on given PORT
app.listen(PORT, () => {
	console.log(
		`NodeJs application started listening http://localhost:${PORT}`
	);
});
