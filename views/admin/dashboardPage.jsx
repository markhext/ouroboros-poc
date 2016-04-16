
import React from 'react';
import CategoriesTable from './categoriesTable.jsx';
import DataWheel from './dataWheel.jsx';

class DashboardPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {categories: []};

    }

    componentDidMount () {

    }

    render () {

        return (

            <section>

                <div className="col-5">

                    <DataWheel />


                </div>

                <div className="col-6">

                    <h2 className="title">Orders</h2>

                    <div className="col-3">
                        <h4>Orders revenue</h4>
                        <h2>£200.46</h2>
                    </div>

                    <div className="col-3">
                        <h4>Quantity</h4>
                        <h2>12</h2>
                    </div>







                    <table>

                        <thead>

                            <tr>
                                <th>Product</th>
                                <th>SKU</th>
                                <th>User</th>
                                <th>Qty</th>
                                <th></th>
                                <th>Value</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>
                                Example product
                                </td>

                                <td>
                                001
                                </td>

                                <td>
                                Kelly Abbott
                                </td>

                                <td>
                                1
                                </td>

                                <td>
                                    <button>Select</button>
                                </td>

                                <td>
                                £24.95
                                </td>

                                <td>
                                Awaiting
                                </td>

                            </tr>

                        </tbody>

                    </table>


                </div>

                <div className="clearfix"></div>




            </section>


        );
    }
}



module.exports = DashboardPage;


