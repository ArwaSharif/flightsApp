require("dotenv").config();
//Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/database')
const Flight =('./models/flight.js')

//View Engine Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set('views', './views')
app.set("view engine", "jsx");
//Custom Middleware
// set to our entire website
app.use(express.urlencoded({extended:false}))
app.use((req, res, next) => {
  console.log(`Custom Middleware running for all the routes`);
  next();
});

//  WELCOME/TEST
app.get("/", (req, res) => {
    res.send("Welcome to the Flights App!");
  });


//INDEX
app.get('/flights', async (req, res) =>{
    try{
        const foundFlight = await Flight.find({})
        res.status(200).render('Index', {flights: foundFlight})
    } catch(err) {
        res.status(400).send(err)
    }

})

//NEW
app.get('/flights/new', (req, res)=> {
    try{
    res.render('New')
    } catch(err) {
        res.status(400).send(err)
    }
})
//CREATE
try{

} catch(err) {
    res.status(400).send(err)
}

//SHOW
try{

} catch(err) {
    res.status(400).send(err)
}
//EDIT
//UPDATE
//DESTROY



app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
// setTimeout(() => {
//     db.close();
// }, 5000);