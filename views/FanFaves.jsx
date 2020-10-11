const React = require('react');
const Default = require('./Default');

class FanFaves extends React.Component {
    render() {
        const {pies} = this.props;
        return (
            <Default>
                <header>
                    <nav>
                        <a href="/PaleoPie">Home</a>
                        <a href="/PaleoPie/about">About Paleo Pie</a>
                        <a href="/PaleoPie/new">Create New Pie</a>
                    </nav>
                    <h1>Fan Faves</h1>
                </header>
                <ul>
                    {
                        pies.map((pie) => {
                            return (
                                <li>
                                    <p>{pie.name}</p>
                                    <img className="newImg" src={pie.image} alt={`Image of ${pie.name}`} />
                                    <p>{pie.description}</p>
                                    {/* <div className="background"> */}
                                        <h2>Ingredients</h2>
                                        <h3>Crust</h3>
                                        {pie.ingredients.crust.map((crust) => {
                                            return (
                                                <li>{crust}</li>
                                            )
                                        })}
                                        <h3>Filling</h3>
                                        {pie.ingredients.filling.map((filling) => {
                                            return (
                                                <li>{filling}</li>
                                            )
                                        })}
                                    {/* </div> */}
                                    <form action={`/PaleoPie/fanfaves/${pie._id}?_method=DELETE`} method="POST" >
                                        <input className="button" type="submit" value="DELETE PIE" />
                                    </form>
                                    <hr/>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = FanFaves;