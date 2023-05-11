const express = require("express");
const port = 5000;

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/user-routes");

const app = express();

app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);

app.use((error, req, res, next) => {
  if (res.hearderSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Unkown error accour" });
});

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
