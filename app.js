const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const connectToMongoose = require("./db");
const cors = require("cors");
require("dotenv").config();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const port = 5000;

connectToMongoose()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB" + error);
  });

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/user-routes");

const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/upload/images", express.static(path.join("upload", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  next();
});

app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  res.redirect("https://mymedia-kfpt.onrender.com/");
  // next(new HttpError("Route not fount", 404));
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.hearderSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Unkown error accour" });
});

app.listen(process.env.POST || port);
