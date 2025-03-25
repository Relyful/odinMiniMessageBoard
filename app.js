const express = require('express');
const path = require('path');
const indexRouter = require("./routes/indexRouter");
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT || 8080, () => {
  console.log(`Welcome to your server, listening on ${PORT}.`);  
});
