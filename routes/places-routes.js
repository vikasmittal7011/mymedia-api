const express = require("express");
const { check } = require("express-validator");
const checkAuth = require("../middleware/check-auth");

const fileUpload = require("../middleware/file-upload");

const router = express.Router();

const placesController = require("../controllers/places-controller");

router.get("/", placesController.findPlace);

router.get("/:placeId", placesController.findPlaceById);

router.get("/users/:userId", placesController.findPlacesByUserId);

router.use(checkAuth);

router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("descrition").isLength({ min: 8 }),
    check("address").isLength({ min: 5 }),
  ],
  placesController.addNewPlace
);

router.patch(
  "/:placeId",
  [check("title").not().isEmpty(), check("descrition").isLength({ min: 8 })],
  placesController.updatePlace
);

router.delete("/:placeId", placesController.deletePlace);

module.exports = router;
