const express = require('express');
const router = express.Router();
const {getEmployees, addEmployee, updateEmployee, deleteEmployee} = require('../controllers/employees');

router
    .route('/')
    .get(getEmployees)
    .post(addEmployee)
    .put(updateEmployee)
    .delete(deleteEmployee);

module.exports = router;