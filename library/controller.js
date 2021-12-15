'use strict';

var properties = require('../package.json')
var books = require('../service/books')
var distance = require('../service/books')

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
    getBooks: function(req, res) {
        books.find(req, res, function(err, book) {
            if (err)
                res.send(err);
            res.json(book);
        });
    },
};
module.exports = controllers;