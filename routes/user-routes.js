const express = require("express");
const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

const userController = require("../controllers/users-controller");

router.get("/", userController.getAllUserDetails);

router.post("/login", userController.loginUser);

router.post(
  "/register",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 8 }),
  ],
  userController.registerUser
);

module.exports = router;
