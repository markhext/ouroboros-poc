var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Category = {
    categoryName: String,
    title: String
};



module.exports = mongoose.model('newCategory', Category);