const React = require('react');
const Default = require('./Default')

class Edit extends React.Component {
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
                <h1>Edit This Pie</h1>
                <p>{pie.name}</p>
                <div className="container">
                    <img src={pie.image} alt={`Image of ${pie.name}`} />
                    <p>{pie.description}</p>
                </div>
                <form action={`/PaleoPie/fanfaves/?_method=PUT`} method="POST">
                    <fieldset>
                        <legend>Crust</legend>
                        Cassava Flour:<input type="checkbox" name="cassava flour" />
                        Almond Flour: <input type="checkbox" name="almond flour" />
                        Coconut Flour: <input type="checkbox" name="coconut flour" />
                        Tigernut Flour: <input type="checkbox" name="tigernut flour" />
                    </fieldset>
                    <fieldset>
                        <legend>Filling</legend>
                        BlueBerries: <input type="checkbox" name="blueberries" />
                        Strawberries: <input type="checkbox" name="strawberries" />
                        Mixed Berry: <input type="checkbox" name="mixed berry" />
                        Pumpkin: <input type="checkbox" name="pumpkin" />
                        Chocolate Cream: <input type="checkbox" name="chocolate cream" />
                        Banana Cream: <input type="checkbox" name="banana cream" />
                        Lemon: <input type="checkbox" name="lemon" />
                    </fieldset>
                    <input className="button" type="submit" value="SAVE EDITS" />
                </form>
            </Default>
        );
    }
}

module.exports = Edit;