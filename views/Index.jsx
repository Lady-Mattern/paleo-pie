const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
            const {pies} = this.props;
        return (
            <Default>
                <header>
                    <nav>
                        <a href="/PaleoPie/about">About PaleoPie</a>
                        <a href="/PaleoPie/fanfaves">Fan Faves</a>
                        <a href="/PaleoPie/new">Create Your Own Pie</a>
                    </nav>
                </header>
                <h1>Paleo Pie</h1>
                <ul>
                    {
                        pies.map((pie) => {
                            return(
                                <li>
                                    <h2>{pie.name}</h2>
                                    <div class="container">
                                        <div>
                                            <a className="change" href={`/PaleoPie/${pie._id}`}><img src={pie.image} alt={`Image of ${pie.name}`} /></a>
                                        </div>
                                        <div>
                                            <p>{pie.description}</p>
                                        </div>
                                    </div>
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

module.exports = Index;