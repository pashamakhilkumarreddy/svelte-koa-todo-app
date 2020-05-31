const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const TodosSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Todos', TodosSchema);
