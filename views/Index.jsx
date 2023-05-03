const React = require('react')
const Nav = require('../views/components/Nav')

const divStyle = {
    textAlign: "center", 
    // backgroundImage: 'url()', 
    // backgroundRepeat: 'no-repeat', 
    // backgroundSize: 'cover', 
    backgroundColor: "lightgray", 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


class Index extends React.Component {
render() {
    const { flights } = this.props;
    return (
    <div>
        <h1> Index Page </h1>
        <ol>
        {flights.map((flight, i) => {
            return (
            <li style={{listStyle: 'none'}}>
                <a href={`/pokemon/${pokemonObj._id}`} style={{color: "#3663ad"}}>
                <strong>{capitalizeFirstLetter(pokemonObj.name)}</strong>
                </a>
            </li>
            );
        })}
        </ol>

        <Nav  link="/pokemon/New"  text="Click Here to Add a New Pokemon"/>
    </div>
    );
}
}

module.exports = Index;
