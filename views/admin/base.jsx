
import React from 'react';
import SideBar from './sideBar.jsx';

import AdminView from './adminView.jsx';



class Base extends React.Component {


    render () {

        return (

            <div >

                <SideBar />

                <AdminView init={this.props.init} />

            </div>

        );
    }
}



module.exports = Base;


