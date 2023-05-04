const React = require("react");
const moment = require('moment')
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
  return moment(date).format('MM/DD/YYYY, hh:mm a')
}

class Index extends React.Component {
  render() {
    const flights = this.props.flights;
    console.log('this is flight show:', flights)
    return (
      <div style={divStyle}>
        <h1> Flights Itinerary </h1>
        <ol>
          {flights.map((flight, i) => {
            return (
              <li>
                <a href={`/flights/${flight._id}`} style={{ color: "#3663ad" }}> {i}</a>

                <h3><strong>Airline:</strong> {capitalizeFirstLetter(flight.airline)}</h3>

                 <h3><strong>FlightNo:</strong> {flight.flightNo}</h3>
                 
                <h3><strong>Departure:</strong> {formattedDate(flight.departs)}</h3>
              </li>
            );
          })}
        </ol>
        <Nav link="/flights/new" text="Add New Flight Itinerary" />
      </div>
    );
  }
}

module.exports = Index;

{
  /*         <table
          style={{
            border: "1px solid",
            // borderCollapse: 'collapse',
          }}
        >
  <tr>
            <th>
              <strong>Airline</strong>
            </th>
            <th>
              <strong>FlightNo</strong>
            </th>
            <th>
              <strong>Departure</strong>
            </th>
          </tr><>
                <tr key={i}>
                  <td>
                    <a href={`/flights/${flight._id}`}>{i}</a>
                    {capitalizeFirstLetter(flight.airline)}
                  </td>
                  <td>{flight.flightNo}</td>
                  <td>{flight.departs}</td>
                </tr>
                </>
              );
            })}
        </table> */
}
