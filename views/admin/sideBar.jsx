
import React from 'react';


class SideBar extends React.Component {

    constructor (props) {
        super(props);
    }


    render () {

        return (

            <div id="side-bar">

                <nav>

                    <ul>

                        <li>
                            <img src="../public/images/logo.svg" />
                        </li>


                        <li onClick={this.props.changeView.bind(this, 1)}>
                            <i className="fa fa-tachometer"></i>
                            <span>Dashboard</span>
                        </li>

                        <li onClick={this.props.changeView.bind(this, 2)}>
                            <i className="fa fa-gift"></i>
                            <span>Products</span>
                        </li>

                        <li onClick={this.props.changeView.bind(this, 3)}>
                            <i className="fa fa-shopping-basket"></i>
                            <span>Sales</span>
                        </li>

                        <li onClick={this.props.changeView.bind(this, 4)}>
                            <i className="fa fa-users"></i>
                            <span>Users</span>
                        </li>

                        <li onClick={this.props.changeView.bind(this, 5)}>
                            <i className="fa fa-cogs"></i>
                            <span>System</span>
                        </li>



                    </ul>

                </nav>


            </div>




        );
    }
}



module.exports = SideBar;


