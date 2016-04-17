
import React from 'react';


class ProductsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {categories: []};


    }

    componentDidMount () {


    }


    render () {


        return (

            <section>


                <div className="product-overview">

                    <div className="col-6">

                        <h2>Current product --- {this.props.pageState}</h2>

                    </div>

                    <div className="col-2">

                        <h4>Total sales</h4>
                        <h2>£1200.98</h2>

                    </div>

                    <div className="col-2">

                        <h4>Stock levels</h4>
                        <h2>23</h2>

                    </div>

                    <div className="clearfix"></div>

                </div>

                <div className="product-options-panel">

                    <div className="col-6">

                        <input type="text" />

                        <select>
                            <option>Best sellers</option>
                            <option>Latest</option>
                            <option>Most viewed</option>

                        </select>

                    </div>

                    <div className="col-6">

                        <button className="admin-btn btn-secondary pull-right">Next</button>
                        <button className="admin-btn btn-secondary pull-right">Prev</button>

                        <div className="pull-right">
                            <span>1-5</span>
                        </div>

                        <div className="clearfix"></div>

                    </div>

                    <div className="clearfix"></div>

                </div>

                <table>
                    <thead>

                        <tr>
                            <th>Select</th>
                            <th>Product</th>
                            <th></th>
                            <th>SKU</th>
                            <th>Qty</th>
                            <th>Stock levels</th>
                            <th></th>
                            <th>Status</th>
                            <th>Value</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>
                        <tr>

                            <td>
                                <input type="checkbox" />
                            </td>
                            <td></td>
                            <td>Example product</td>
                            <td>0001</td>
                            <td>20</td>
                            <td></td>
                            <td><button className="admin-btn btn-primary">Quick view</button></td>
                            <td></td>
                            <td></td>
                            <td><button className="admin-btn btn-secondary">Edit</button></td>


                        </tr>

                    </tbody>

                </table>

            </section>


        );
    }
}



module.exports = ProductsList;


