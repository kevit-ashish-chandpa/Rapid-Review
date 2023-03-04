const mongoose = require("mongoose");

// const validator = require("validator");
//process.env.MONGODB_URL

mongoose.connect('mongodb+srv://rapidReview:CqQSk48wKazvDhpZ@cluster0.mj0l3am.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});