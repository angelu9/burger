var connection = require('../config/connection.js');

var orm = {

    customQuery: function() {

    },

    selectAll: function(tableInput, cb) {

        var queryString = 'SELECT * FROM ' + tableInput + ';';

        connection.query(queryString, function(err, result) {

            if(err) throw(err);

            cb(result);

        });

    },

    insertOne: function(columns, values, cb) {

        var queryString = 'INSERT INTO burger (';
        queryString += columns[0] + ', ' + columns[1] + ') ';
        queryString += 'VALUES (?, ?);';

        console.log(queryString);

        connection.query(queryString, values, function(err, result) {

            if(err) throw(err);

            console.log(result);
            cb(result);

        });
    
    },

    updateOne: function(id, devoured, cb) {

        var queryString = 'UPDATE burger SET devoured = ' + devoured;
        queryString += ' WHERE id = ' + id +';';

        console.log(queryString);

        connection.query(queryString, function(err, result) {

            if(err) throw(err);

            console.log(result);

            cb(result);

        });
    },

    deleteOne: function(id, cb) {

        var queryString = 'DELETE FROM burger WHERE id = ' + id + ';';
        
        connection.query(queryString, function(err, result) {
    
            if(err) throw(err);

            cb(result);
        });        
    }
};

module.exports = orm;