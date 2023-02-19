const mongoose = require("mongoose");



const dbConnect = async() => {
    try {
        await mongoose.connect("mongodb+srv://nyaks:Seku2020@track-expenses.fu812sn.mongodb.net/track-expenses-db?retryWrites=true&w=majority",{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`DB connected Successfully`)
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;