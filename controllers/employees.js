const EmployeeList = require('../models/employee');

exports.getEmployees = async (req, res, next) => {
    try{
        const employees = await EmployeeList.find();

        return res.status(200).json({
            success: true,
            count: employees.length,
            data: employees
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({error:'Server error'});
    }
}

exports.addEmployee = async (req, res, next) => {
    try{
        const employees = await EmployeeList.create(req.body);
        return res.status(201).json({
            success: true,
            data: employees
        });
    } catch(err){
        console.log(err);
        res.status(500).json({error:'Server error'});
    }
}

exports.updateEmployee = async (req, res, next) => {
    try{
        const employees = await EmployeeList.findOneAndUpdate(req.body.prev, req.body.newOne,);
        
        return res.status(201).json({
            success: true,
            data: employees
        });
    } catch(err){
        console.log(err);
        res.status(500).json({error:'Server error'});
    }
}

exports.deleteEmployee = async (req, res, next) => {
    try{
        const employees = await EmployeeList.findOneAndDelete(req.body.prev);
        
        return res.status(201).json({
            success: true,
            data: employees
        });
    } catch(err){
        console.log(err);
        res.status(500).json({error:'Server error'});
    }
}