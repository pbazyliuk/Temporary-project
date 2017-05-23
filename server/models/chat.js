const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const chatSchema = new Schema({
  name: String,
  privateMessages: Array,
  usersIds: Array,
  usersNames: Array
});

// Create the model class
const ModelClass = mongoose.model('chat', chatSchema, 'CHATS');

// Export the model
module.exports = ModelClass;