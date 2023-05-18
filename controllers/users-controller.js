const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const salt = 12;
const success = false;
const jwt_key = process.env.JWT_KEY;

const getAllUserDetails = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (error) {
    return res.status(500).json({
      success,
      messge: "Something is wrong, please try again later!!",
      status: 500,
    });
  }
  return res.json({ success: true, users, status: 200 });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser, comparePassword;
  try {
    existingUser = await User.findOne({ email: email });
    comparePassword = await bcrypt.compare(password, existingUser.password);
  } catch (error) {
    return res.status(500).json({
      success,
      message: "Internal server error, try again!",
      status: 500,
    });
  }

  if (!comparePassword || !existingUser) {
    return res.status(404).json({
      success,
      messsage: "Entered credential are wrong, try again later!",
      status: 404,
    });
  }

  let token;
  try {
    token = await jwt.sign(
      { userid: existingUser._id, email: existingUser.email },
      jwt_key,
      { expiresIn: "1h" }
    );
  } catch (err) {
    return res.status(500).json({
      success,
      message: "Internal server error, try again!",
      status: 500,
    });
  }

  return res.status(200).json({
    success: true,
    message: "Login success!!",
    existingUser,
    token: token,
    status: 200,
  });
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
    if (user) {
      return next(
        new HttpError("This is email is already exsist in our database", 400)
      );
    }

    bcrypt.hash(password, salt).then(async (pass, err) => {
      user = await User.create({
        name,
        image: req.file.path,
        email,
        password: pass,
        places: [],
      });
    });
  } catch (error) {
    return next(
      new HttpError("Account is not created something is worng", 500)
    );
  }

  return res.status(200).json({
    success: true,
    message: "Account is created successfully",
    status: 200,
  });
};

exports.getAllUserDetails = getAllUserDetails;
exports.loginUser = loginUser;
exports.registerUser = registerUser;
