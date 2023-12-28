const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE || 'mongodb://127.0.0.1:27017/portfolio');

module.exports = mongoose.connection;
