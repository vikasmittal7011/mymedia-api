const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.header.auth.split(" ")[1];
    if (!token) {
      throw new Error("Authentical Failed!!");
    }
    const tokenValue = jwt.verify(token, donttrytohackmykeyforwrongwork);
    req.userData = { userId: tokenValue.userId };
    next();
  } catch (err) {
    return next(new HttpError("Authentical Failed!!", 401));
  }
};
