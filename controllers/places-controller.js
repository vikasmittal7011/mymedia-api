const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const Place = require("../models/place");

let demoPlaces = [
  {
    id: "p1",
    title: "Red Fort",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8LcGbb_GcSH4dmWuiHPJY0C-U7KZ0-QXMA&usqp=CAU      ",
    descrition:
      "17th-century Mughal fortress built in towering red sandstone, now a complex of museums.",
    address:
      "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
    userID: "u1",
  },
  {
    id: "p2",
    title: "Taj Mehel",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0YT7qpsWzJh6MEbQ39K_Zuaqw2_FEEVSdQ&usqp=CAU",
    descrition:
      "17th-century, Mughal-style, marble mausoleum with minarets, a mosque & famously symmetrical gardens.",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    userID: "u2",
  },
  {
    id: "p3",
    title: "Hawa Mahal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYeRV_mbvr73YY4HEFIBg7KRbTK-GvdVZzw&usqp=CAU",
    descrition:
      "Palace built in the form of a high wall to screen royal ladies as they watched street festivities.",
    address:
      "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002",
    userID: "u2",
  },
  {
    id: "p4",
    title: "Amber Palace",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6dMhZe1-fbY-qOWPIDViErwqSpw3QA2sQQ&usqp=CAU",
    descrition:
      "Structure known as both Amer and Amber, with Hindu & Muslim elements & offering elephant rides.",
    address: "Devisinghpura, Amer, Jaipur, Rajasthan 302001",
    userID: "u2",
  },
  {
    id: "p5",
    title: "Fort Aguada",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluk0-EfHAcszfenqIDwHAKUmUcBEgymxf2g&usqp=CAU",
    descrition:
      "Fort Aguada is a 17th-century Portuguese fort looking out at the confluence of Mandovi River and the Arabian Sea.",
    address: "Candolim, Goa",
    userID: "u1",
  },
];

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

const updatePlace = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError("Enter valid input fields", 422));
  }

  const placeId = req.params.placeId;
  const { title, descrition } = req.body;

  const updatePlace = { ...demoPlaces.find((p) => p.id === placeId) };
  const placeIndex = demoPlaces.findIndex((p) => p.id === placeId);

  updatePlace.title = title;
  updatePlace.descrition = descrition;

  demoPlaces[placeIndex] = updatePlace;

  res.status(201).json({ message: "Update Sccuess" });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.placeId;

  demoPlaces = demoPlaces.filter((p) => p.id !== placeId);

  res.json(demoPlaces);
};

exports.findPlaceById = findPlaceById;
exports.findPlace = findPlace;
exports.findPlacesByUserId = findPlacesByUserId;
exports.addNewPlace = addNewPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
