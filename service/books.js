var request = require('request');

const book = [
    { id: 1, title: 'Faust', description:'not my cup of tea'},
    { id: 2, title: 'Robinson', description:'pretty good'}
]; 

var books = {
   find: function(req, res, next) {
       request(req.params.id,
       function (error, response, body) {
           if (req.params.id== 1) {
            response = ({ bookid: 1, title: 'Faust', description:'not my cup of tea'});
               res.send(response);
           } if (req.params.id== 2) {
            response = ({ bookid: 2, title: 'Robinson', description:'pretty good'});
            res.send(response);
        } else {
            response = "please choose a different ID";
            res.send(response);
           }
       });
   }
};

module.exports = books;
