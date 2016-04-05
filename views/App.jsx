
import React from 'react';


class App extends React.Component {

    render () {
        return (
            <html>
                <head>
                    <title>{this.props.page.headTitle}</title>
                    <link rel="stylesheet" href="../public/build/index.css" />

                </head>

                <body>

                    <div id="app-view" dangerouslySetInnerHTML={{__html: this.props.remount }}>
                    </div>

                    <script id="app-state"
                        dangerouslySetInnerHTML={{__html: this.props.state }}>
                    </script>

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.15.0-alpha.1/react-with-addons.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
                    <script src="../public/build/bundle.js"></script>

                </body>
            </html>


        );
    }
}



module.exports = App;


