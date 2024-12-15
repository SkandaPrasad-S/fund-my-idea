const mongoose = require('mongoose')
const logger = require('./logger')
const { DATABASE_URL } = require('../config/environment.js')

const connectDB = async () => {
    try {
      mongoose.connect(DATABASE_URL, {
        serverSelectionTimeoutMS: 5000
      });
        logger.info("Connected to MongoDb successfully")
      } catch (error) {
        logger.error('MongoDB connection failed:', error.message); // Fixed variable name
        process.exit(1); 
      }
}

// mongoose.connect(uri, options).then(
//   () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ },
//   err => { /** handle initial connection error */ }
// );

module.exports = connectDB
