const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user2:user2@cluster.g58hq.mongodb.net/Angular?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewauthorSchema = new Schema({
    title : String,
    year : String,
    genre : String,
    image : String
});

var Authordata = mongoose.model('authordata', NewauthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;