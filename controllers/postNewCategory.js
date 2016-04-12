'use strict';


const Hapi = require('hapi');
const Inert = require('inert');
const Joi = require('joi');
const NewCategory = require('../models/newCategory.model.js');





class PostNewCategory {

    constructor (request, reply){
        this.request = request;
        this.reply = reply;
    }

    get process (){

        this.validate();

    }

    validate () {
        //console.log( this.request.payload + 'Its working');


        //var db = server.plugins['hapi-mongoose'].connection;
        //
        //var mongoose = server.plugins['hapi-mongoose'].lib;

        var jsonPayload = this.request.payload;

        var schema = {
            categoryName: Joi.string(),
            title: Joi.string()
        };

        var _title = {
            categoryName: jsonPayload.categoryName,
            title: jsonPayload.title
        };

        Joi.validate(_title, schema,  (err, value) => {

            if(err){
                this.reply({
                    error: value
                })
            }else {

                var categoryPages = new NewCategory(_title);

                categoryPages.save((err)=>{
                    if (err) {
                        console.log(err);
                    } else {

                        NewCategory.find({}, (err, doc)=>{


                            this.reply(doc);

                        });




                    }
                })


            }

        });


    }
}


module.exports = PostNewCategory;