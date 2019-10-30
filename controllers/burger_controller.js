var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {

    burger.selectAll(function(data) {

        console.log(data);
        var burgersObject = {
            burgers: data
        };

        res.render('index', burgersObject);
    });
});

router.post('/api/burgers', function(req, res) {

    console.log('route');


    burger.insertOne(['burger_name', 'devoured'], [req.body.name, 'false'], function(result) {

       console.log(result);


    });

    res.end('hello');

});

router.put('/api/burgers/:id', function(req, res) {

    console.log('hello');
    console.log(req.body.newDevoured);

    burger.updateOne(req.params.id, req.body.newDevoured, function(result) {

        console.log(result);

        if(result.changedRows == 0) {
            
            return res.status(404).end();
        
        }else{
    
            res.status(200).end();
        }

    });
});

router.delete('/api/burgers/:id', function(req, res) {

    console.log('delete');

    burger.deleteOne(req.params.id, function(result) {

        if(result.affectedRows == 0) {
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});







module.exports = router;