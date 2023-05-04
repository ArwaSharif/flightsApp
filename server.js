require("dotenv").config();
//Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./config/database");
const Flight = require("./models/flight");

//View Engine Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("views", "./views");
app.set("view engine", "jsx");

//Custom Middleware
// set to entire website
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(`Custom Middleware running for all the routes`);
  next();
});

//  WELCOME/TEST
app.get("/", (req, res) => {
  res.send("Welcome to the Flights App!");
});

//INDEX
app.get("/flights", async (req, res) => {
    console.log(`Index Controller Func. running...`);
  try {
    const foundFlight = await Flight.find({});
    res.status(200).render("Index", { flights: foundFlight });
  } catch (err) {
    res.status(400).send(err);
  }
});

//NEW
app.get("/flights/new", (req, res) => {
    res.render("New");
});

//CREATE
app.post("/flights", async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    res.status(400).send(err);
  }
});

//SHOW
app.get("/flights/:id", async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id);
    res.render("Show", { flights: foundFlight });
  } catch (err) {
    res.status(400).send(err);
  }
});

//EDIT
//UPDATE
//DESTROY

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
// setTimeout(() => {
//     db.close();
// }, 5000);
