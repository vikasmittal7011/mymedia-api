const express = require("express");

const router = express.Router();

const userContoller = require("../controllers/users-contoller");

router.get("/", userContoller.getAllUserDetails);

router.post("/login", userContoller.loginUser);

router.post("/register", userContoller.registerUser);

module.exports = router;
