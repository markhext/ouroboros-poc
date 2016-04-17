
import React from 'react';

import ProductsList from './productList.view.jsx';
import AddProducts from './addProducts.view.jsx';

class ProductsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {categories: []};


    }

    componentDidMount () {


    }


    render () {

        console.log(this.props.pageState);

        var pageState;

        if(this.props.pageState === 1){
            pageState = <ProductsList />
        }else {
            pageState = <AddProducts />
        }

        return (

            <section>
                {pageState}
            </section>



        );
    }
}



module.exports = ProductsPage;


