const ageHandler = (req, res, next) => {
	const dateofbirth = req.body.dateofbirth;
	//calculate month difference from current date in time
	const year = new Date(
		Date.now() - new Date(dateofbirth).getTime()
	).getUTCFullYear();
	//now calculate the age of the user
	const age = Math.abs(year - 1970);
	req.age = age;
	if (age < 18) {
		console.log("Age must be greater than 18 years !");
		res.status(401).send({
			message: "Age must be greater than 18 years !",
		});
	} else next();
};

module.exports = { ageHandler };
