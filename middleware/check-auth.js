const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentication Failed!!");
    }
    const tokenValue = jwt.verify(token, "donttrytohackmykeyforwrongwork");
    req.userData = { userId: tokenValue.userid };
    next();
  } catch (err) {
    return next(new HttpError("Authentication Failed!!", 401));
  }
};
