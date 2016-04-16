
import React from 'react';
import D3Wheel from '../../public/js/D3wheel.js';

class DataWheel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {categories: []};

    }

    componentDidMount () {

        var datawheel1 = new D3Wheel({_id: 'data-wheel1'}),
            datawheel2 = new D3Wheel({_id: 'data-wheel2'});

        datawheel1.start;
        datawheel2.start;

    }

    render () {

        return (

            <section>

                <div className="">

                    <div className="col-3">

                        <h3>Todays Sales</h3>
                        <h4>£200.50</h4>

                    </div>

                    <div id="data-wheel1" className="col-3">


                    </div>

                    <div className="col-3">

                        <h3>Time remaining</h3>
                        <p>Time remaining before delivery deadline</p>

                    </div>


                </div>



                <div className="">

                    <div className="col-3">

                        <h3>Todays Sales</h3>
                        <h4>£200.50</h4>

                    </div>

                    <div id="data-wheel2" className="col-3">


                    </div>

                    <div className="col-3">

                        <h3>Time remaining</h3>
                        <p>Time remaining before delivery deadline</p>

                    </div>


                </div>




            </section>



        );
    }
}



module.exports = DataWheel;


