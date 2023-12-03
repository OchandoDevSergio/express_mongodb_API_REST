const mongoose = require('mongoose');
const Employee = require('../models/employee.model');


(async ()=> {
    console.log("entra");
    await mongoose.connect('mongodb://127.0.0.1/companyEmployees');
    console.log("sigue");
    
    const newEMployee = await Employee.create({
         name: 'nombre de prueba',
         surnames: 'apellidos de prueba',
         role: 'administrative',
         employee_id: 0o1,
         joining_date: "2020-12-25",
         leaving_date: "2021-01-01"
    });

    console.log(newEMployee);


}) ();