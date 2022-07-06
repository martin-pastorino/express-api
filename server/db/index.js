const mongoose = require("mongoose");

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true, useUnifiedTopology: true
        });

        console.log("Connected to the DB")
    } catch (err) {
        console.error("Cannot connecto to the database")
    }
}

db().catch(err => console.error("Can not connecto to the database", err))


