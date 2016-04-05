
'use strict';


const Inert = require('inert');
const Vision = require('Vision');
const HapiReactViews = require('hapi-react-views');

const IsomophicRenderer = require('../controllers/isomophicRenderer.js');


/**
 * Constructor for initiating the Routes with the Hapi.js server constructor
 */

class Routes {

    constructor (server) {
        this.server = server;
    }

    get start () {

        // REGISTER VISION AND INERT WITH HAPI

        this.server.register([Inert, Vision], (err) => { if (err) {throw err; } });

        this.server.views({
            engines: {
                jsx: HapiReactViews
            },
            relativeTo: __dirname,
            path: '../views'
        });

        this.homeRoute();
        this.adminRoute();
        this.images();
        this.builds();


    }

    // Route for the Home Page

    homeRoute () {

        this.server.route({
                method: 'GET',
                path: '/',
                handler: function (request, reply) {

                    var renderer = new IsomophicRenderer({
                        server: this.server,
                        response: reply,
                        state: {
                            headTitle: 'Home Page',
                            pageTitle: 'Welcome to the home page'
                        }

                    });

                    renderer.render;

                }.bind(this)
            });
    }

    adminRoute () {

        this.server.route({
            method: 'GET',
            path: '/admin',
            handler: function (request, reply) {

                var renderer = new IsomophicRenderer({
                    server: this.server,
                    response: reply,
                    state: {
                        headTitle: 'Admin Page',
                        pageTitle: 'Welcome to the Admin page'
                    }

                });

                renderer.render;

            }.bind(this)
        });
    }


    /* ----------------
        STATICS
    --------------------*/


    images () {
        this.server.route({
            method: 'GET',
            path: '/image/{img}',
            handler: function (request, reply) {

                var _param = encodeURIComponent(request.params.img);

                reply.file(`./public/images/${_param}`);
            }
        });
    }


    // TODO - possible security issue on Route
    builds () {
        this.server.route({
            method: 'GET',
            path: '/public/{file*}',
            handler: function (request, reply) {

                var param = request.params.file;

                console.log(`${param}`);

                reply.file(`./public/${param}`);
            }
        });
    }



}





module.exports = Routes;
