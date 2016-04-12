
import React from 'react';
import Header from '../common/header.common.jsx';
import Banner from './banner.jsx';


class Layout extends React.Component {



    render () {
        return (
            <div>

                <Header />

                <Banner />

                <h1>The Summer has arrived</h1>

            </div>

        );
    }
}



module.exports = Layout;


