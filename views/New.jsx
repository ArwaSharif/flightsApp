const React = require("react");
const Nav = require('../views/components/Nav')

const divStyle = {
  textAlign: "center",
  // backgroundImage: 'url()',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  backgroundColor: "lightgray",
};

class New extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <h1> Book A New Flight</h1>
        <form action="/flights" method="POST">
          <label> Enter Airline:</label>
          <input type="text" name="airline" required/>
          {/* <datalist>
          <option value="American">American</option>
          <option value="Southwest">Southwest</option>
          <option value="United">United</option>
          </datalist> */}
          <label> Enter Flight Number:</label>
          <input type="number" name="flightNo" min="10" max="9999" required/>
          <label> Enter Departure Date and Time:</label>
          <input type="datetime-local" name="departs"/>
          <input type="submit" value="Submit Flight"/>
        </form>
        <a href="/flights" style={{ fontSize: "10pt" }}>
          Back to Home Page
        </a>
      </div>
    );
  }
}
module.exports = New;