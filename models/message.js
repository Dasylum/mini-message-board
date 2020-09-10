var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    name: String,
    message: String
});

module.exports = mongoose.model('messages', messageSchema);