
import React from 'react';
import SideBar from './sideBar.jsx';
import AdminView from './adminView.jsx';

class Base extends React.Component {

    constructor (props) {
        super(props);

        this.state = {view: 1};

        this.handleViewChange = this.handleViewChange.bind(this);
    }


    handleViewChange (opt) {

        this.setState({view: opt});

    }

    render () {


        return (

            <div>

                <SideBar changeView={this.handleViewChange} />

                <AdminView init={this.props.init} view={this.state.view} />

            </div>

        );
    }
}



module.exports = Base;


