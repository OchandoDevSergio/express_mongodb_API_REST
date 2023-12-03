const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    //Emplea types propios de mongoose
    name: {type: String, required: true},
    surnames: {type: String, required: true},
    role: {type: String, enum: ['operator', 'administrative'], required: true},
    employee_id: {type: Number, length: 3, required: true},
    joining_date: {type: Date, required: true},
    leaving_date: {type: Date}
},{
    timestamps: true
});

module.exports = mongoose.model( 'employee', employeeSchema);

