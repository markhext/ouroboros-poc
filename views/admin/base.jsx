
import React from 'react';
import SideBar from './sideBar.jsx';

import AdminView from './adminView.jsx';



class Base extends React.Component {

    constructor (props) {
        super(props);

        this.state = {view: 1}
    }


    handleViewChange (opt) {
        switch (opt) {
            case 2:
                this.setState({view: 2});
                break;
            case 3:
                this.setState({view: 3});
                break;
            case 4:
                this.setState({view: 4});
                break;
            case 5:
                this.setState({view: 5});
                break;

            default :this.setState({view: 1});


        }
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


