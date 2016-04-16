
import React from 'react';


class AdminHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            headerTitle: 'Dashboard',
            headerButtons: [
                {
                    text: 'Process order',
                    btnStyle: 'admin-btn btn-primary pull-right'
                }
            ]
        }
    }

    render () {

        console.log('prop changed',this.props.view);

        var boardInfo;

        switch (this.props.view) {

            case 1:
                boardInfo = {
                    headerTitle: 'Dashboard',
                    headerButtons: [
                        {
                            text: 'Process order',
                            btnStyle: 'admin-btn btn-primary pull-right'
                        }
                    ]
                };
                break;
            case 2:
                boardInfo = {
                    headerTitle: 'Products',
                    headerButtons: [
                        {
                            text: 'Add product',
                            btnStyle: 'admin-btn btn-primary pull-right'
                        }
                    ]
                };
                break;
            case 3:
                boardInfo = {
                    headerTitle: 'Sales',
                    headerButtons: [
                        {
                            text: 'Add a return',
                            btnStyle: 'admin-btn btn-secondary pull-right'
                        }
                    ]
                };
                break;
            case 4:
                boardInfo = {
                    headerTitle: 'Users',
                    headerButtons: [
                        {
                            text: 'Add a return',
                            btnStyle: 'admin-btn btn-secondary pull-right'
                        }
                    ]
                };
                break;
            case 5:
                boardInfo = {
                    headerTitle: 'Systems',
                    headerButtons: [
                        {
                            text: 'Add a return',
                            btnStyle: 'admin-btn btn-secondary pull-right'
                        }
                    ]
                };
                break;
            default :
                boardInfo = {
                    headerTitle: 'Dashboard',
                    headerButtons: [
                        {
                            text: 'Process order',
                            btnStyle: 'admin-btn btn-primary pull-right'
                        }
                    ]
                };

        }

        return (

            <section id="admin-header">

                <div className="top-block">
                    <h2 className="pull-left">{boardInfo.headerTitle}</h2>

                    <aside className="pull-right">
                        <span>time</span>
                    </aside>

                    <div className="clearfix"></div>
                </div>


                <div className="admin-notification-block">

                { boardInfo.headerButtons.map((i, k)=>{
                    return <button key={k} className={i.btnStyle}>{i.text}</button>

                }) }




                    <div className="clearfix"></div>


                </div>



            </section>



        );
    }
}



module.exports = AdminHeader;


