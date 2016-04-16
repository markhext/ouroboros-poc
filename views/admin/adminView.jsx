
import React from 'react';
import AdminHeader from './adminHeader.jsx';
import CategoriesPage from './categoriesPage.jsx';
import DashboardPage from './dashboardPage.jsx';
import SalesPage from './salesPage.jsx';
import UsersPage from './usersPage.jsx';
import SystemsPage from './systemsPage.jsx';
class AdminView extends React.Component {

    constructor(props) {
        super(props);


    }

    componentDidMount () {

    }


    render () {

        var adminView;

        switch (this.props.view) {

            case 1:
                adminView = <DashboardPage />;
                break;
            case 2:
                adminView = <CategoriesPage />;
                break;
            case 3:
                adminView = <SalesPage />;
                break;
            case 4:
                adminView = <UsersPage />;
                break;
            case 5:
                adminView = <SystemsPage />;
                break;
            default :
                adminView = <DashboardPage />;

        }


        return (

            <div>

                <div className="admin-view">

                    <AdminHeader view={this.props.view} />

                    {adminView}

                </div>

            </div>

        );
    }
}



module.exports = AdminView;


