const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const userContoller = require("../controllers/users-contoller");

router.get("/", userContoller.getAllUserDetails);

router.post("/login", userContoller.loginUser);

router.post(
  "/register",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 8 }),
  ],
  userContoller.registerUser
);

module.exports = router;
