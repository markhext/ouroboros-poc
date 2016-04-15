
import React from 'react';
import Header from '../common/header.common.jsx';
import Footer from '../common/footer.common.jsx';
class Base extends React.Component {

    constructor (props) {
        super(props);

    }



    render () {


        return (

            <div>

                <Header init={this.props.init} />

                <h1>{this.props.init.heading}</h1>

                <Footer />

            </div>


        );
    }
}


module.exports = Base;


