
import React from 'react';


class AddProducts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {categories: []};


    }

    componentDidMount () {


    }


    render () {


        return (

            <section>


                <div className="">

                    <div className="col-6">

                        <h2>Add a product </h2>

                    </div>

                    <div className="col-2">



                    </div>

                    <div className="col-2">


                    </div>

                    <div className="clearfix"></div>

                </div>



            </section>


        );
    }
}



module.exports = AddProducts;


