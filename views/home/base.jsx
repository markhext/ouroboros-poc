
import React from 'react';
import Header from '../common/header.common.jsx';
import Banner from './banner.jsx';
import Footer from '../common/footer.common.jsx';


class Layout extends React.Component {


    render () {
        return (
            <div>

                <Header init={this.props.init} />

                <Banner />

                <Footer />

            </div>

        );
    }
}



module.exports = Layout;


