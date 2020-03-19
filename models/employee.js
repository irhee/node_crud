const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
      fullName: {
        type: String,
        required: [true, 'Please add a full name']
      },
      email: {
        type: String,
        required: [true, 'Please add an email']
      },
      age: {
        type: Number,
        required: [true, 'Please add an age']
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})

module.exports = mongoose.model('EmployeeList',EmployeeSchema);