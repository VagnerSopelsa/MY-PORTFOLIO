const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGO_URL_CONNECT,
    {
        userNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("Connected to MongoDB");
    }
);