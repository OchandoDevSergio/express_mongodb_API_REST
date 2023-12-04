const router = require('express').Router();
const Employee = require('../../models/employee.model');

router.get('/', async(req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error para traer los empleados'});
  }
});

module.exports = router;