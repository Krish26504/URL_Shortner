const mongoose = require('mongoose');
require ('dotenve').config();

const connectDB = async()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error){
        console.error('Connection failed:', error.message);
        process.exit(1);
    }

};
module.exports = connectDB;