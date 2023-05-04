const React = require("react");

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <a style={{ color: "#3663ad" }} href={this.props.link}>
          {this.props.text}
        </a>
      </nav>
    );
  }
}

module.exports = Nav;