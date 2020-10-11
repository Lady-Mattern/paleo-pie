const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const {pie} = this.props;
        return (
            <Default>
                <header>
                    <nav>
                        <a href="/PaleoPie">Home</a>
                        <a href="/PaleoPie/about">About Paleo Pie</a>
                        <a href="/PaleoPie/fanfaves">Fan Faves</a>
                        <a href="/PaleoPie/new">Create Your Own Pie</a>
                    </nav>
                </header>
                <h1>{pie.name}</h1>
                <div className="container">
                    <img src={pie.image} alt={`Image of ${pie.name}`} />
                    <p>{pie.description}</p>
                </div>
                <div className="background">
                    <p>Price: $ {pie.price}</p>
                    <a className="button" href={`/PaleoPie/${pie._id}/edit`}>Edit This Pie</a>
                    <h2>Ingredients</h2>
                    <h3>Crust</h3>
                    <ul>
                        {
                            pie.ingredients.crust.map((ingredient) => {
                                return (
                                    <li>{ingredient}</li>
                                )
                            })
                        }
                    </ul>
                    <h3>Filling</h3>
                    <ul>
                        {
                            pie.ingredients.filling.map((ingredient) => {
                                return (
                                    <li>{ingredient}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Default>
        )
    }
}

module.exports = Show;