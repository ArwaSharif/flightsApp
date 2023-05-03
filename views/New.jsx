const React = require("react");

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
          <input list="airline" name="airline" required/>
          <datalist id="browsers" />
          <option value="American" />
          <option value="Southwest" />
          <option value="United" />
          <label> Enter Flight Number:</label>
            <input type="number" name="flightNo" min="10" max="9999" required/>
          <label> Enter Departure Date:</label>
          <input type="date" name="departs"/>
          <input type="submit" value="Submit Flight"></input>
        </form>
      </div>
    );
  }
}
