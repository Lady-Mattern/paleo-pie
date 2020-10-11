const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Paleo Pie</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/main.css" />
                    <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Rock+Salt&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default;