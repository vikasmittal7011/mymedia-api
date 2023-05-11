const express = require("express");
const bodyParser = require("body-parser");
const connectToMongoose = require("./db");
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

app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  next(new HttpError("Route not fount", 404));
});

app.use((error, req, res, next) => {
  if (res.hearderSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Unkown error accour" });
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
