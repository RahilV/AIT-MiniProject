require("dotenv").config();
// Load necessary modules
const express = require("express");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt");
const cors = require("cors");
const multer = require("multer");
const PORT = process.env.PORT || 8080;

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
const url = process.env.MONGODB_URL;

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
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
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

// Index Route
app.get("/", (req, res) => {
	res.send("invaild endpoint");
});

app.get("/properties", (req, res) => {
	properties.find({}).toArray(function (err, result) {
		if (err) throw err;
		res.status(200).send(result);
	});
});

app.post("/singleupload", upload.single("file"), (req, res) => {
	const file = req.file;
	if (!file) res.status(400).send({ status: "No File Uploaded" });
	else {
		console.log(file);
		res.send({ status: "File uploaded successfully" });
	}
});

app.post("/multipleupload", upload.array("files"), (req, res) => {
	const files = req.files;
	if (files.length == 0)
		res.status(400).send({ status: "No Files Uploaded" });
	else {
		console.log(files);
		res.send({ status: "Files uploaded successfully" });
	}
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "public/index.html"));
});

// listen to the requests on given PORT
app.listen(PORT, () => {
	console.log(
		`NodeJs application started listening http://localhost:${PORT}`
	);
});
