const express = require("express");
const port = 5000;

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/user-routes");

const app = express();

app.use("/api/places", placesRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
