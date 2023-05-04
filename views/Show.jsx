const React = require("react");
const moment = require('moment')

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
  return moment(date).format('MM/DD/YYYY, hh:mm a')
}

class Show extends React.Component {
  render() {
    const flight = this.props.flights;
    // console.log('this is flight show:', flight)
    return (
      <div style={divStyle}>
        <h1 style={{textDecoration: 'underline'}}> <strong>{flight.airline} Flight</strong> Itinerary</h1>
        <br />
        <h2> Airline: {capitalizeFirstLetter(flight.airline)}</h2>
        <br />
        <h2>flight No.: {flight.flightNo}</h2>
        <br />
        <h2> Departure: {formattedDate(flight.departs)} </h2>
        <hr />
        <a href="/flights" style={{ fontSize: "10pt" }}>
          Home Page
        </a>
      </div>
    );
  }
}

module.exports = Show;
