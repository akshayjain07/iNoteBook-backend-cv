require('dotenv').config();  // This line loads the environment variables from the .env file

const mongoose = require("mongoose");

// Now, use the environment variable
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to Mongo successfully.");
    } catch (error) {
        console.error("Could not connect to Mongo!", error);
    }
}

module.exports = connectToMongo;
