var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var index = require('./routes/index.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

var messagesModel = require('./models/message.js');

mongoose.connect('mongodb+srv://NewDiet:Ds8764082465@cluster0.sbfkl.mongodb.net/minimessageboardDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(8000, (req, res) => {
    console.log("Server running on port 8000...");
})

app.use('/', index);