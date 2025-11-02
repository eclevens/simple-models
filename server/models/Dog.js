const mongoose = require('mongoose');

// variable to hold our Model
let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    required: true,
    min: 0,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});
// Create the dog model based on the schema
DogModel = mongoose.model('Dog', DogSchema);

// We only want to export the dog model, so we can overwrite the entire exports object.
module.exports = DogModel;
