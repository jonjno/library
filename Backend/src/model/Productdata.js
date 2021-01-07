const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user2:user2@cluster.g58hq.mongodb.net/<dbname>?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});

var Productdata = mongoose.model('bookdata', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Productdata;