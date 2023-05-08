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

const yearDate = moment().add(1, "year")
    
let formatted = moment(yearDate).format("ddd MM/DD/YYYY, hh:mm a")
class Show extends React.Component {
  render() {
    const flight = this.props.flights;
    const destination = flight.destination;
    console.log("this is flight show:", flight);
    console.log("this is destination show:", destination);
    return (
      <div style={divStyle}>
        <h1 style={{ textDecoration: "underline" }}> Flight Itinerary</h1>

        <h2> Airline: <span style={{ color: '#7c001f' }}>{capitalizeFirstLetter(flight.airline)}</span></h2>
        <h2> Airport: <span style={{ color: '#7c001f' }}>{flight.airport}</span></h2>
        <h2>Flight No. : <span style={{ color: '#7c001f' }}>{flight.flightNo}</span></h2>
        <h2>
          {" "}
          Departure:{" "} <span style={{ color: '#7c001f' }}>{!formatted ? formattedDate(flight.departs) : formatted}</span>{" "}
        </h2>
        <hr />
        {!flight.destination.length ? (
          <a href={`/flights/${flight._id}/edit`}>
            {" "}
            <button>Add Destination Info</button>
          </a>
        ) : (
          destination.map((d, i) => {
            return (
              <>
                <h1 style={{ textDecoration: "underline" }}>
                  {" "}
                  Destination Info{" "}
                </h1>
                <h2> Destination Arrival: <span style={{ color: '#7c001f' }}>{formattedDate(d.arrival)}</span></h2>
                <h2> Destination Airport: <span style={{ color: '#7c001f' }}>{d.airport}</span></h2>
              </>
            );
          })
        )}
        <hr />
        <a href="/flights" style={{ fontSize: "10pt" }}>
          Home Page
        </a>
      </div>
    );
  }
}

module.exports = Show;
