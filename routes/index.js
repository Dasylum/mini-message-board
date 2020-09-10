var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var messagesModel = require('../models/message');
const message = require('../models/message');

router.get('/', (req, res, next) => {
    messagesModel.find({}, (err, result) => {
        if(!err) {
            res.render('index', {messages: result} )
        }
        else {
            throw err;
        }
    })
    
})

router.get('/new', (req, res, next) => {
    res.render('form');
})

router.post('/new', (req, res, next) => {
    var instance = new messagesModel();
    instance.name = req.body.name;
    instance.message = req.body.message;
    
    instance.save({}, (err, result) => {
        if(!err) {
            res.redirect('/')
        }
        else {
            throw err;
        }
    })
})

module.exports = router;