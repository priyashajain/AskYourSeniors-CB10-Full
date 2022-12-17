const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    // _id: String,
    content: String,
    category: String,
    // userId: String
    user: {
        _id: String,
        email: String,
        password: String,
        fName: String,
        lName: String,
        branch: String,
        year: String
    }
});

// mongoose
// prisma
// sequelize
// tailwind

module.exports = mongoose.model("questions", questionSchema);