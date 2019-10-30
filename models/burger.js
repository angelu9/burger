var orm = require('../config/orm.js');

var burger = {

    customQuery: function() {

    },
    selectAll: function(cb) {

        orm.selectAll('burger', function(res) {
           cb(res);
        });

    },
    insertOne: function(columns, values, cb) {

        console.log('burgers');
        console.log(columns);
        console.log(values);

        orm.insertOne(columns, values, function(result) {

            console.log(result);
            cb(result);
        });

    },
    updateOne: function(id, devoured, cb) {

        console.log('burgers');

        orm.updateOne(id, devoured, function(result) {


            console.log(result);


            cb(result);
        });
    },
    deleteOne: function(id, cb) {

        orm.deleteOne(id, function(result) {
            cb(result);
        });
    } 
};

module.exports = burger;