
import React from 'react';


class Layout extends React.Component {

    clicker() {
        alert('Test');

    }

    render () {
        return (
            <div>

                <h1 onClick={this.clicker}>Welcome -- -</h1>

            </div>

        );
    }
}



module.exports = Layout;

