const React = require("react");
const Nav = require("../views/components/Nav");
const moment = require('moment')


const divStyle = {
  textAlign: "center",
  // backgroundImage: 'url()',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  backgroundColor: "lightgray",
};

const yearDate = moment().add(1, "year");

function dateInYear(date) {
  return moment(date).format("ddd MM/DD/YYYY, hh:mm a");
}
class New extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <h1> Book A New Flight</h1>
        <form action="/flights" method="POST">
          <label> Enter Airline:</label>
          <br /><input
            type="text"
            name="airline"
            placeholder="American,Southwest,or United"
            required
          />
          <br />
          <br />
          <label>Enter Airport:</label>
          <br />
          <select name="airport">
            <option defaultValue="SAN">SAN</option>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <br />
          <label> Enter Flight No. :</label>
          <br />
          <input type="number" name="flightNo" min="10" max="9999" required />
          <br />
          <br />
          <label> Enter Departure Date and Time:</label>
          <br />
          {/* dateInYear(yearDate) */}
          <input type="datetime-local" name="departs" defaultValue={this.props.defaultDate}/>
          <br />
          <input type="submit" value="Submit Flight" />
        </form>
        <hr />
        <a href="/flights" style={{ fontSize: "10pt" }}>
          Back to Home Page
        </a>
      </div>
    );
  }
}
module.exports = New;
