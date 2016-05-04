
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
                    headerTitle: 'Categories',
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
                    headerTitle: 'Products',
                    headerButtons: [
                        {
                            text: 'Add product',
                            btnStyle: 'admin-btn btn-primary pull-right',
                            action: 2
                        },
                        {
                            text: 'Product list',
                            btnStyle: 'admin-btn btn-secondary pull-right',
                            action: 1
                        }
                    ]
                };
                break;
            case 4:
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
            case 5:
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
            case 6:
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
                    return <button onClick={this.props.pageAction.bind(this, i.action)} key={k} className={i.btnStyle}>{i.text}</button>

                }) }




                    <div className="clearfix"></div>


                </div>



            </section>



        );
    }
}



module.exports = AdminHeader;


