
import React from 'react';
import AdminHeader from './adminHeader.jsx';
import CategoriesPage from './categoriesPage.jsx';
import ProductsPage from './productsPage.jsx';
import DashboardPage from './dashboardPage.jsx';
import SalesPage from './salesPage.jsx';
import UsersPage from './usersPage.jsx';
import SystemsPage from './systemsPage.jsx';
class AdminView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {pageState: 1}

        this.pageActions = this.pageActions.bind(this);


    }

    componentDidMount () {

    }

    pageActions ( action ) {

        this.setState({pageState: action});

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
                adminView = <ProductsPage pageState={this.state.pageState} />;
                break;
            case 4:
                adminView = <SalesPage />;
                break;
            case 5:
                adminView = <UsersPage />;
                break;
            case 6:
                adminView = <SystemsPage />;
                break;
            default :
                adminView = <DashboardPage />;

        }

        return (

            <div>

                <div className="admin-view">

                    <AdminHeader view={this.props.view} pageAction={this.pageActions} />

                    {adminView}

                </div>

            </div>

        );
    }
}



module.exports = AdminView;


