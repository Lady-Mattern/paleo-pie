const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <header>
                    <nav>
                        <a href="/PaleoPie">Home</a>
                        <a href="/PaleoPie/about">About PaleoPie</a>
                        <a href="/PaleoPie/fanfaves">Fan Faves</a>
                    </nav>
                    <h1>Build Your Own Pie</h1>
                </header>
                <form action={`/PaleoPie/fanfaves`} method="POST">
                    <fieldset>
                        <legend>Pie Labels</legend>
                            <p>Give your creation a name.</p>
                            Name: <input type="text" name="name" placeholder="Name your pie" />
                            <p>Use our image or upload an image or a cool drawing of your pie.</p>
                            Image: <input type="text" name="image" value="/images/mustache.jpg" />
                            <p>Tell the world about your Magnum Opus.</p>
                            Description: <textarea name="description" id="description" cols="30" rows="10"></textarea>
                            </fieldset>
                            <p id="center">Now let's add some ingredients!</p>
                    <fieldset>
                        <legend>Crust Ingredients</legend>
                            Cassava Flour: <input className="input-field" type="checkbox" name="cassava flour" />
                            Almond Flour: <input className="input-field" type="checkbox" name="almond flour" />
                            Coconut Flour: <input className="input-field" type="checkbox" name="coconut flour" />
                            Tigernut Flour: <input className="input-field" type="checkbox" name="tigernut flour" />
                    </fieldset>
                    <fieldset>
                        <legend>Filling Ingredients</legend>
                            Blueberries: <input className="input-field" type="checkbox" name="blueberries" />
                            Strawberries: <input className="input-field" type="checkbox" name="strawberries" />
                            Mixed Berry: <input className="input-field" type="checkbox" name="mixed berry" />
                            Pumpkin: <input className="input-field" type="checkbox" name="pumpkin" />
                            Chocolate Cream: <input className="input-field" type="checkbox" name="chocolate cream" />
                            Banana Cream: <input className="input-field" type="checkbox" name="banana cream" />
                            Lemon: <input className="input-field" type="checkbox" name="lemon" />
                    </fieldset>
                    <input className="button" type="submit" value="BRING PIE TO LIFE!" />
                </form>
            </Default>
        );
    }
}

module.exports = New;