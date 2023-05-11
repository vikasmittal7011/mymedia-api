const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const placesController = require("../controllers/places-controller");

router.get("/:placeId", placesController.findPlaceById);

router.get("/users/:userId", placesController.findPlacesByUserId);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("descrition").isLength({ min: 8 }),
    check("address").isLength("5"),
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
