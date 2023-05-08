const React = require("react");
const moment = require("moment");
const Nav = require("../views/components/Nav");

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

class Index extends React.Component {
  render() {
    const flights = this.props.flights;
    console.log("this is flight show:", flights);
    return (
      <div style={divStyle}>
        <h1> Flights Itinerary </h1>
        <ol style={{ backgroundColor: "lightgray" }}>
          {flights.map((flight, i) => {
            return (
              <li key={i} style={{ textAlign: "left", listStyle: "none" }}>
                <h3>
                  {i}-{"       "} <strong>Airline:</strong>
                  {"   "}
                  <i>
                    <span style={{ color: "#7c001f" }}>
                      {capitalizeFirstLetter(flight.airline)}
                    </span>
                  </i>
                  {"             "}
                  <strong>Flight No. :</strong>
                  {"   "}
                  <i>
                    {" "}
                    <span style={{ color: "#7c001f" }}> {flight.flightNo}</span>
                  </i>
                  {"             "}
                  <a
                    href={`/flights/${flight._id}`}
                    style={{ color: "#3663ad", fontSize: "8pt" }}
                  >
                    {" "}
                    <strong>Flights Details...</strong>{" "}
                  </a>
                  <form
                    action={`/flights/${flight._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE FLIGHT" />
                  </form>
                </h3>
                <hr />
              </li>
            );
          })}
        </ol>
        <Nav
          style={{ textAlign: "left" }}
          link="/flights/new"
          text="Add New Flight Itinerary"
        />
      </div>
    );
  }
}

module.exports = Index;
