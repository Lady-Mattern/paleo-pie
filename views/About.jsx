const React = require('react');
const Default = require('./Default');

class About extends React.Component {
    render() {
        return (
            <Default>
                <header>
                    <nav>
                        <a href="/PaleoPie">Home</a>
                        <a href="/PaleoPie/fanfaves">Fan Faves</a>
                        <a href="/PaleoPie/new">Create Your Own Pie</a>
                    </nav>
                </header>
                <h1>The Legend of Paleo Pie</h1>
                <div id="about">
                    <p>Many people all over the world find the need to conform to an alternative diet for reasons of health or conscience. </p>
                    <p>These diets include Paleo, Autoimmune Paleo, GAPS, Keto, and others. The idea behind these life changes is to eliminate foods that cause inflammation and digestive issues in the gut which can inflame autoimmune, and other gut related maladies.</p>
                    <p>Paleo Pie is a fictitious bakery dedicated to the Paleo and Autoimmune Paleo diets to allow those with autoimmune issues access to delicious baked goods that are compliant with their diet restrictions and food intolerances.</p>
                </div>
            </Default>
        )
    }
}

module.exports = About;