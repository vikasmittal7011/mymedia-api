const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const Place = require("../models/place");

const findPlace = async (req, res, next) => {
  let allPlace;
  try {
    allPlace = await Place.find();
  } catch (err) {
    return next(new HttpError("Internal server error, try again!", 500));
  }

  res.json(allPlace);
};

const findPlaceById = async (req, res, next) => {
  let _id = req.params.placeId;
  let findedPlace;

  try {
    findedPlace = await Place.findById({ _id });
  } catch (error) {
    return next(new HttpError("Internal server error, try again!", 500));
  }

  res.json(findedPlace);
};

const findPlacesByUserId = async (req, res, next) => {
  let userId = req.params.userId;
  let findedPlaces;

  try {
    findedPlaces = await Place.find({ userID: userId });
    if (!findedPlaces || findedPlaces.length === 0) {
      return next(new HttpError("Places not something is wrong", 404));
    }
  } catch (error) {
    return next(new HttpError("Internal server error, try again!", 500));
  }

  res.json(findedPlaces);
};

const addNewPlace = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError("Enter valid input fields", 422));
  }

  const { title, image, descrition, address, userID } = req.body;
  const newPlace = {
    title,
    image,
    descrition,
    address,
    userID,
  };

  const createPlace = Place(newPlace);

  try {
    await createPlace.save();
  } catch (error) {
    console.log(error);
    return next(new HttpError("Place can't be add, please try again!", 500));
  }

  res.status(201).json(newPlace);
};

const updatePlace = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError("Enter valid input fields", 422));
  }

  const _id = req.params.placeId;
  const { title, descrition } = req.body;

  const updatePlace = { title: title, descrition: descrition };

  try {
    await Place.findByIdAndUpdate(_id, updatePlace, { new: false });
  } catch (error) {
    return next(new HttpError("Place can't be add, please try again!", 500));
  }

  res.status(201).json({ message: "Update Sccuess" });
};

const deletePlace = async (req, res, next) => {
  const _id = req.params.placeId;

  try {
    await Place.findByIdAndDelete({ _id });
  } catch (error) {
    console.log(error);
  }

  res.json({ message: "Successfully deleted" });
};

exports.findPlaceById = findPlaceById;
exports.findPlace = findPlace;
exports.findPlacesByUserId = findPlacesByUserId;
exports.addNewPlace = addNewPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
