
'use strict';

const Inert = require('inert');
const Vision = require('Vision');
const HapiReactViews = require('hapi-react-views');

const IsomophicRenderer = require('../controllers/isomophicRenderer.js');
const PostNewCategory = require('../controllers/postNewCategory.js');
const Categories = require('../models/newCategory.model.js');


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

        // TODO INIT ON REFRESH

        Categories.find({}).lean().exec((err, doc)=>{
            this.categoriesArray = doc;
        });

        this.homeRoute();
        this.categoryRoute();
        this.adminRoute();
        this.images();
        this.builds();
        this.categoryPost();

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
                            base: 'home',
                            categories: this.categoriesArray
                        }

                    });

                    renderer.render;

                }.bind(this)
            });
    }


    categoryRoute () {

        this.server.route({
            method: 'GET',
            path: '/{category}',
            handler: function (request, reply) {

                var _param = encodeURIComponent(request.params.category);


                Categories.findOne({url:`/${_param}`}).lean().exec((err, doc)=>{

                    if(doc === null){
                        return;
                    }

                    if(doc.length === 0){ reply("not Found --->" ) } else {


                        var renderer = new IsomophicRenderer({
                            server: this.server,
                            response: reply,
                            state: {
                                headTitle: doc.title,
                                pageDescription: doc.pageDescription,
                                metaKeywords: doc.metaKeywords,
                                base: 'categories',
                                heading: doc.categoryName,
                                categories: this.categoriesArray
                            }

                        });

                        renderer.render;
                    }
                });


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
                        base: 'admin',
                        categories: this.categoriesArray
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

                reply.file(`./public/${param}`);
            }
        });
    }


    /* ----------------
     JSON POSTS
     --------------------*/

    categoryPost () {
        this.server.route([{
            method: 'POST',
            path: '/submit-category',
            handler: ( request, reply )=> {

                var postNewCategory = new PostNewCategory(request, reply);

                postNewCategory.process;
            }

        },

        {
            method: 'GET',
            path: '/get-categories',
            handler: ( request, reply )=> {

                Categories.find({}, (err, doc)=>{

                    reply(doc);

                });
            }

        },

        {
            method: 'DELETE',
            path: '/delete-category/{id?}',
            handler: ( request, reply )=> {

                var item = encodeURIComponent(request.params.id);

                //reply(item);

                Categories.findOneAndRemove({_id: item}, (err)=>{

                    if(err){
                        reply(err);
                    }else {

                        Categories.find({}, (err, doc)=>{

                            reply(doc);

                        });
                    }


                });


            }

        }


        ]);

    }


}





module.exports = Routes;
