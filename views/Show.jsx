const React = require("react");

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
    const {flight} = this.props.flights;
    console.log('this is flight show:', flight)
    return (
      <div style={divStyle}>
        <h1> Flight Itinerary</h1>
        <br />
        <br />
        <h2> Airline: {capitalizeFirstLetter(flight.airline)}</h2>
        <br />
        <h2>flightNo: {flight.flightNo}</h2>
        <br />
        <h2> Departure Date: {formattedDate(flight.departs)} </h2>
        <a href="/flights" style={{ fontSize: "10pt" }}>
          Home Page
        </a>
      </div>
    );
  }
}

module.exports = Show;
