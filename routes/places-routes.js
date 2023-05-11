const express = require("express");

const router = express.Router();

const placesController = require("../controllers/places-controller");

router.get("/:placeId", placesController.findPlaceById);

router.get("/users/:userId", placesController.findPlaceByUserId);

module.exports = router;
