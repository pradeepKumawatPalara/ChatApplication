const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connect = async() => {
    await mongoose.connect("mongodb://0.0.0.0:27017/chatapp");
}

module.exports = connect;