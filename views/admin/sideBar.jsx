
import React from 'react';


class SideBar extends React.Component {

    render () {
        return (



            <div id="side-bar">

                <nav>

                    <ul>

                        <li>
                            <img src="../public/images/logo.svg" />
                        </li>


                        <li>
                            <i className="fa fa-tachometer"></i>
                            <span>Dashboard</span>
                        </li>

                        <li>
                            <i className="fa fa-gift"></i>
                            <span>Products</span>
                        </li>

                        <li>
                            <i className="fa fa-shopping-basket"></i>
                            <span>Sales</span>
                        </li>

                        <li>
                            <i className="fa fa-users"></i>
                            <span>Users</span>
                        </li>

                        <li>
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


