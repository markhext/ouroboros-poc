
import React from 'react';


class AdminHeader extends React.Component {

    render () {
        return (


            <section id="admin-header">

                <div className="top-block">
                    <h2 className="pull-left">Dashboard</h2>

                    <aside className="pull-right">
                        <span>time</span>
                    </aside>

                    <div className="clearfix"></div>
                </div>


                <div className="admin-notification-block">

                    <button className="admin-btn btn-primary pull-right">Process order</button>


                    <div className="clearfix"></div>


                </div>



            </section>



        );
    }
}



module.exports = AdminHeader;


