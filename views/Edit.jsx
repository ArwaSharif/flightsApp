const React = require("react");

const divStyle = {
  textAlign: "center",
  // backgroundImage: 'url()',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  backgroundColor: "lightgray",
};

class Edit extends React.Component {
  render() {
    const flight = this.props.flight;
    return (
      <div style={divStyle}>
        <h1>
          <strong>Add Destination Info</strong>{" "}
        </h1>
        <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
          <h3>Enter Arrival Date: </h3>
          <input type="datetime-local" name="arrival" required/>
          <br />
          <h3>Enter Arrival Airport: </h3>
          <select name="airport" required> 
            <option value="none" selected>
              --
            </option>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br /> <br />
          <input type="submit" value="Submit Arrival Info" />
          <br />
          <br />
        </form>
        <hr />
        <a href="/flights" style={{ fontSize: "10pt" }}>
          Home Page
        </a>
      </div>
    );
  }
}

module.exports = Edit;
