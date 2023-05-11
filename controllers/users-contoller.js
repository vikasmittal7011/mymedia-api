const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");

let demoUserDetails = [
  {
    name: "Vikas",
    email: "vikas@gmail.com",
    password: "123456",
  },
  {
    name: "Aman",
    email: "aman@gmail.com",
    password: "987654",
  },
];

const getAllUserDetails = (req, res, next) => {
  res.json(demoUserDetails);
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  const validUser = demoUserDetails.filter(
    (user) => user.email === email && user.password === password
  );

  if (validUser.length === 0 || !validUser) {
    next(new HttpError("Invalid details try again!!", 400));
  }

  res.json(validUser);
};

const registerUser = (req, res, next) => {
  const valid = validationResult(req);
//   console.log(valid.);
  if (!valid.isEmpty()) {
    return next(new HttpError("Enter valid form details", 422));
  }

  const { name, email, password } = req.body;
  const newUser = {
    name,
    email,
    password,
  };
  demoUserDetails.push(newUser);

  res.status(200).json(newUser);
};

exports.getAllUserDetails = getAllUserDetails;
exports.loginUser = loginUser;
exports.registerUser = registerUser;
