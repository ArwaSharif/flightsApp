const React = require("react");
const moment = require("moment");


const divStyle = {
  textAlign: "center",
  // backgroundImage: 'url()',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  backgroundColor: "lightgray",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const formattedDate = (date) => {
  return moment(date).format("ddd MM/DD/YYYY, hh:mm a");
};

// let dateNow = new Date()
// let yearFromNowUnix = dateNow.setFullYear(dateNow.getFullYear() + 1)
// const yearFromNowUTC = moment(yearFromNowUnix).format('MM/DD/YYYY, hh:mm a')


class UpdatedShow extends React.Component {
  render() {
    const flight = this.props.flights;
    console.log('this is updated show flight', flight)
    const destination = flight.destination
    console.log('this is des in updatedshow', destination[0].airport)

    return (
      <div style={divStyle}>
        <h1 style={{ textDecoration: "underline" }}>
          {" "}
          <strong>{flight.airline} Flight</strong> Itinerary
        </h1>
        {/* <br /> */}
        <h2> Airline: {capitalizeFirstLetter(flight.airline)}</h2>
        {/* <br /> */}
        <h2> Airport: {flight.airport}</h2>
        {/* <br /> */}
        <h2>Flight No. : {flight.flightNo}</h2>
        {/* <br /> */}
        <h2> Departure: {
        !flight.departs ? 
        `!!!!`
        // Flight.findByIdAndUpdate('flight._id', ) departs. yearFromNowUTC
         : formattedDate(flight.departs)} </h2>
          <h2> Destination Arrival: {!destination.arrival ? `!!!` : formattedDate(destination[0].arrival)}</h2>
          <h2> Destination Airport: {destination[0].airport}</h2>
        <hr />
        {/* <br /> */}
        
        {/* <hr /> */}
        <a href="/flights" style={{ fontSize: "10pt" }}>
          Home Page
        </a>
      </div>
    );
  }
}

// module.exports = UpdatedShow;