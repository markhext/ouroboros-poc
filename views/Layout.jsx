'use strict';

import React from 'react';

import Home from '../views/home/base.jsx';
import Admin from '../views/admin/base.jsx';


/**
 * Layout component defines which base component
 * to reveal in relation to the server route configuration
 */

class Layout extends React.Component {


    render () {
        return (
            <div>

                {(() => {
                    switch (this.props.base) {

                        case "admin":  return <Admin />;
                        default:       return <Home />;
                    }
                })()}

            </div>

        );
    }
}


module.exports = Layout;
