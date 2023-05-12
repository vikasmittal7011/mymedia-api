const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const salt = 12;

const getAllUserDetails = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (error) {
    return next(
      new HttpError("Something is wrong, please try again later!!", 500)
    );
  }
  res.json({ users });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser, comparePassword;
  try {
    existingUser = await User.findOne({ email: email });
    comparePassword = await bcrypt.compare(password, existingUser.password);
  } catch (error) {
    console.log(error);
  }

  if (!comparePassword || !existingUser) {
    return res.status(404).json({ messsage: "Enter valid details" });
  }

  res.status(200).json({ message: "Login success!!", existingUser });
};

const registerUser = async (req, res, next) => {
  const valid = validationResult(req);
  if (!valid.isEmpty()) {
    return next(new HttpError("Enter valid form details", 422));
  }
  const { name, email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email: email });
    console.log(user);
    if (user) {
      return res
        .status(400)
        .json({ message: "This is email is already exsist in our database" });
    }

    bcrypt.hash(password, salt).then(async (pass, err) => {
      user = await User.create({
        name,
        email,
        password: pass,
      });
    });
  } catch (error) {
    return next("Account is not created something is worng", 500);
  }

  res.status(200).json({ message: "Account is created successfully " });
};

exports.getAllUserDetails = getAllUserDetails;
exports.loginUser = loginUser;
exports.registerUser = registerUser;
