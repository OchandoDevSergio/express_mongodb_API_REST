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

router.post('/', async (req, res) => {
  try {
      const newEmployee = await Employee.create(req.body);
      res.json(newEmployee);
  } catch (error) {
      res.status(500).json({ error: 'Ha ocurrido un error' });
  }
})

router.put('/:employeeId', async (req, res) => {
  try {
      const employeeEdit = await Employee.findByIdAndUpdate(
          req.params.employeeId,
          req.body,
          { new: true }
      );
      res.json(employeeEdit);
  } catch (error) {
      res.status(500).json({ error: 'Ha ocurrido un error' });
  }
});

router.delete('/:employeeId', async (req, res) => {
  try {
      const employee = await Employee.findByIdAndDelete(req.params.employeeId);
      res.json(employee);
  } catch (error) {
      res.status(500).json({ error: 'Ha ocurrido un error' });
  }
})

module.exports = router;