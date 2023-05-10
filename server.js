require("dotenv").config();
//Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/database");
const Flight = require("./models/flight");
const methodOverride = require("method-override");

//connecting to db
connectDB();

//View Engine Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("views", "./views");
app.set("view engine", "jsx");

//Custom Middleware
// set to entire website
app.use(express.urlencoded({ extended: false }));
//METHOD OVERRIDE
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  console.log(`Custom Middleware running for all the routes`);
  next();
});

//  WELCOME/TEST
app.get("/", (req, res) => {
  res.send(`Welcome to the Flights App!
    <a href="/flights"> ENTER </a>
  `);
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
  const newFlight = new Flight();
  const defaultDate = newFlight.departs;
  res.render("New", {defaultDate});
  console.log('this is default date',defaultDate)
});

//DELETE
app.delete("/flights/:id", async (req, res) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    //refreshing the page with what deleted gone
    res.status(200).redirect("/flights");
  } catch (err) {
    res.status(400).send(err);
  }
});

//UPDATE
app.put("/flights/:id", async (req, res) => {
  try {
    //update the specific flight and submit to body
    const updateFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      //data from req.body
      { $push: { destination: req.body } },
      // req.body,
      //if the new is not there, it will show the old doc before the update
      { new: true }
    );
    console.log("updated w/ dest", updateFlight);
    //redirecting to the specific fruit show page; good UE, aka user experience
    //there should be only 1 show, had an updateShow route that I redirected to
    res.redirect(`/flights/${req.params.id}`);
    //add the form action and method to see the effects
  } catch (err) {
    res.status(400).send(err);
  }
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

//EDIT
app.get("/flights/:id/edit", async (req, res) => {
  // finding the document that we are about to edit, giving the Edit.jsx the document found through props
  try {
    const foundFlight = await Flight.findById(req.params.id); //accessing the params with req.params.id
    console.log("this is found flight in edit route", foundFlight);
    console.log("this is flight.dest in edit route", foundFlight.destination);
    res.render("Edit", {
      flight: foundFlight,
    }); //sending the found flight as an obj so that we can edit it
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

//UpdatedShow
// app.get("/flights/:id/updatedShow", async (req, res) => {
//   try {
//     const foundFlight = await Flight.findById(req.params.id);
//     res.render("UpdatedShow", { flights: foundFlight});
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
