var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Category = {
    categoryName: String,
    title: String,
    pageDescription: String,
    metaKeywords: String,
    url: String
};



module.exports = mongoose.model('newCategory', Category);