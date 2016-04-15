
import React from 'react';
import AdminHeader from './adminHeader.jsx';
import CategoriesPage from './categoriesPage.jsx';

class AdminView extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {adminCategory: 0}

    }

    componentDidMount () {

    }


    render () {

        console.log('STATE---', this.props.view);

        return (

            <div>

                <div className="admin-view">

                    <AdminHeader />


                    <CategoriesPage />

                </div>

            </div>

        );
    }
}



module.exports = AdminView;


