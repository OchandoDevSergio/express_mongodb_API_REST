//Rutas API
const router = require('express').Router();

router.use('/employees', require('./employees.route'));


module.exports = router;