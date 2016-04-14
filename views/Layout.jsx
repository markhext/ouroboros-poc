'use strict';

import React from 'react';

import Home from '../views/home/base.jsx';
import Admin from '../views/admin/base.jsx';
import Categories from '../views/categories/base.jsx';

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

                        case "admin":  return <Admin init={this.props} />;
                        case "categories":  return <Categories init={this.props} />;
                        default:       return <Home init={this.props} />;
                    }
                })()}

            </div>

        );
    }
}


module.exports = Layout;
