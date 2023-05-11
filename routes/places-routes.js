const express = require("express");

const router = express.Router();

const placesController = require("../controllers/places-controller");

router.get("/:placeId", placesController.findPlaceById);

router.get("/users/:userId", placesController.findPlacesByUserId);

router.post("/", placesController.addNewPlace);

router.patch("/:placeId", placesController.updatePlace);

router.delete("/:placeId", placesController.deletePlace);

module.exports = router;
