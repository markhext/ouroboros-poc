
import React from 'react';


class AddProducts extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {categories: []};

    }

    componentDidMount () {


    }


    render () {


        return (

            <section>


                <div className="">

                    <div className="col-5">

                        <header className="header-block">

                            <h2>Product media</h2>

                        </header>

                        <div>

                            <figure className="col-6">

                            </figure>

                            <aside className="col-5">
                                <span>Test</span>
                            </aside>

                            <div className="clearfix"></div>

                        </div>

                    </div>


                    <div className="col-5">

                        <header className="header-block">

                            <h2>Product page details</h2>

                        </header>

                        <form>
                            <div className="field">
                                <label>Poduct name</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label>Poduct name</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label>Poduct name</label>
                                <input type="text" />
                            </div>

                        </form>

                    </div>

                    <div className="clearfix"></div>

                </div>



            </section>


        );
    }
}



module.exports = AddProducts;
