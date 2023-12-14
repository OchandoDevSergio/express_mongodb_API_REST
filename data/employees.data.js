const mongoose = require('mongoose');
const Employee = require('../models/employee.model');


(async ()=> {
    await mongoose.connect('mongodb://127.0.0.1/companyEmployees');
    
    const newEmployee = await Employee.create([
        {
         name: "Juan",
         surnames: "López Serrano",
         role: 'administrative',
         employee_id: 0o1,
         joining_date: "2020-12-25",
         leaving_date: "2021-01-01"
        },
        {
         name: "Luis",
         surnames: "Navarro Gil",
         role: "operator",
         employee_id: 0o2,
         joining_date: "2020-12-25"
        },
        {
         name: "Jaime",
         surnames: "Maiques Smith",
         role: 'administrative',
         employee_id: 0o3,
         joining_date: "2020-12-25"
        },
        {
         name: "Julián",
         surnames: "Martinez Sanchís",
         role: "operator",
         employee_id: 0o4,
         joining_date: "2020-12-25"
        },
        {
         name: "Jose Luis",
         surnames: "Ledesma Muñoz",
         role: 'administrative',
         employee_id: 0o5,
         joining_date: "2020-12-25",
         leaving_date: "2021-11-10"
        },
        {
         name: "Ismael",
         surnames: "Sánchez Durán",
         role: "operator",
         employee_id: 0o6,
         joining_date: "2020-12-25",
         leaving_date: "2022-10-09"
        }
    ]);

}) ();