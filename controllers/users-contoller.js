const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const salt = 12;
const success = false;

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

  return res
    .status(200)
    .json({ success, message: "Login success!!", existingUser, status: 200 });
};

const registerUser = async (req, res, next) => {
  const valid = validationResult(req);
  if (!valid.isEmpty()) {
    return res
      .status(422)
      .json({ success, message: "Enter valid form details", status: 422 });
  }
  const { name, email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        success,
        message: "This is email is already exsist in our database",
        status: 400,
      });
    }

    bcrypt.hash(password, salt).then(async (pass, err) => {
      user = await User.create({
        name,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU",
        email,
        password: pass,
        places: [],
      });
    });
  } catch (error) {
    return res
      .status(500)
      .json({
        success,
        message: "Account is not created something is worng",
        status: 500,
      });
  }

  return res
    .status(200)
    .json({
      success: true,
      message: "Account is created successfully",
      status: 200,
    });
};

exports.getAllUserDetails = getAllUserDetails;
exports.loginUser = loginUser;
exports.registerUser = registerUser;
