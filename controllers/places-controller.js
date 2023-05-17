const mongoose = require("mongoose");
const fs = require("fs");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const Place = require("../models/place");
const User = require("../models/user");

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
      return next(new HttpError("Places not found something is wrong", 404));
    }
  } catch (error) {
    return next(new HttpError("Internal server error, try again!", 500));
  }

  res.json({ success: true, findedPlaces });
};

const addNewPlace = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError("Enter valid input fields", 422));
  }

  const { title, descrition, address, userID } = req.body;
  const newPlace = {
    title,
    image: req.file.path,
    descrition,
    address,
    userID,
  };

  let user;

  try {
    user = await User.findOne({ _id: userID });
    if (!user) {
      return next(
        new HttpError("Not add place becase of user is not found", 404)
      );
    }
  } catch (err) {
    return next(new HttpError("Not add place, something is wrong", 500));
  }

  const createPlace = Place(newPlace);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createPlace.save({ session: sess });
    user.places.push(createPlace);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (error) {
    console.log(error);
    return next(new HttpError("Place can't be add, please try again!", 500));
  }

  res.status(201).json({ success: true, newPlace });
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

  res.status(201).json({ success: true, message: "Update Sccuess" });
};

const deletePlace = async (req, res, next) => {
  const _id = req.params.placeId;
  let place;
  try {
    place = await Place.findById({ _id }).populate("userID");
  } catch (error) {
    return next(new HttpError("Internal server error at finding time", 500));
  }

  if (!place) {
    return res.status(404).json({ message: "Place not found" });
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    place.deleteOne({ session: sess });
    await place.userID.places.pull(place);
    await place.userID.save({ session: sess });
    sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return next(new HttpError("Internal server error at removing time", 500));
  }

  fs.unlink(place.image, (err) => {
    console.log(err);
  });

  res.json({ sucess: true, message: "Successfully deleted" });
};

exports.findPlaceById = findPlaceById;
exports.findPlace = findPlace;
exports.findPlacesByUserId = findPlacesByUserId;
exports.addNewPlace = addNewPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
