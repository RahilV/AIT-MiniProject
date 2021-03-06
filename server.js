require("dotenv").config();
// Load necessary modules
const express = require("express");
const path = require("path");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const bcrypt = require("bcrypt");
const cors = require("cors");
const multer = require("multer");
const PORT = process.env.PORT || 3000;

// import custom middlewares
const { ageHandler } = require("./middlewares/age");

// initialise express app
const app = express();

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());

let database, users, properties;

// bcrypt rounds to salt
const BCRYPT_SALT_ROUNDS = 12;

// connect to mongodb database
// const url = process.env.MONGODB_URL;
const url =
	"mongodb+srv://rahil_jv:1234@cluster0.sjckd.mongodb.net/ShreejiEstates?retryWrites=true&w=majority";

// connect to mongo
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

// Setting the storage engine...
const storage = multer.diskStorage({
	destination: "./uploads",
	filename: (req, file, callbackFn) => {
		console.log(file);
		callbackFn(null, file.originalname);
	},
});

const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		var filetypes = /docx|doc/;
		var mimetype = filetypes.test(file.mimetype);
		var extname = filetypes.test(
			path.extname(file.originalname).toLowerCase()
		);

		if (mimetype && extname) {
			return cb(null, true);
		} else {
			return cb("Only filetypes .docx, .doc are allowed !", false);
		}
	},
});

// post route for login form submission
app.post("/login", (req, res) => {
	console.log(req.body);
	const email = req.body.email;
	const password = req.body.password;
	users.findOne({ email: email }, (err, user) => {
		if (user) {
			bcrypt.compare(password, user.hash, (err, matched) => {
				if (matched) {
					delete user._id;
					delete user.hash;
					user.password = password;
					res.status(200).send({
						message: "You are validated !!",
						user: user,
					});
				} else
					res.status(401).send({ message: "Incorrect Password !!" });
			});
		} else {
			console.log("User Not Found !!");
			res.status(401).send({
				message: "You are not registered. Please register first !!",
			});
		}
	});
});

// post route for signup form submission
app.post("/signup", ageHandler, (req, res) => {
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
	const age = req.age;

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
	res.status(200).send({ message: "You are registered now !!" });
});

app.get("/properties", (req, res) => {
	properties.find({}).toArray(function (err, result) {
		if (err) throw err;
		res.status(200).send(result);
	});
});

app.post("/useragreement", upload.single("file"), (req, res) => {
	const file = req.file;
	if (!file) res.status(400).send({ status: "No File Uploaded" });
	else {
		console.log(file);
		res.send({ status: "File uploaded successfully" });
	}
});

app.post("/add_properties", (req, res) => {
	console.log(req.body);
	const name = req.body.name;
	const bhk = req.body.bhk;
	const area = req.body.area;
	const lease = req.body.lease;
	const price = req.body.price;
	const img = req.body.img;
	const site = {
		name,
		bhk,
		area,
		lease,
		price,
		img,
	};

	properties.insertOne(site, function (err, res) {
		if (err) throw err;
		console.log("New site registered !!");
	});
	res.status(200).send({ message: "You are registered now !!" });
});

app.post("/edit_sites", (req, res) => {
	const name = req.body.site.name;
	const bhk = req.body.site.bhk;
	const area = req.body.site.area;
	const lease = req.body.site.lease;
	const price = req.body.site.price;
	const img = req.body.site.img;
	const site = {
		name,
		bhk,
		area,
		lease,
		price,
		img,
	};
	console.log(site);
	var ObjectID = mongodb.ObjectID;
	properties.updateOne(
		{ _id: ObjectID(req.body.id) },
		{ $set: site },
		function (err, res) {
			if (err) throw err;
			console.log("1 document updated");
		}
	);
	res.status(200).send({ message: "You are registered now !!" });
});

app.post("/deletesite", (req, res) => {
	const id = req.body.id;
	const ObjectID = mongodb.ObjectID;
	properties.deleteOne({ _id: ObjectID(id) });
	res.status(200).send({ message: "Site deleted successfully" });
});

// default URL to send pages
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

// listen to the requests on given PORT
app.listen(PORT, () => {
	console.log(
		`NodeJs application started listening http://localhost:${PORT}`
	);
});
