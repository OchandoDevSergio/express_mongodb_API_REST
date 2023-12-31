const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const Employee = require('../../models/employee.model')

describe('pruebas API employees', ()=>{

    beforeAll(async () => {
       await mongoose.connect('mongodb://127.0.0.1/companyEmployees');//Vinculamos los test a la BBDD
    });

    afterAll(async()=>{
       await mongoose.disconnect();
    });

    describe('GET /api/employees', ()=>{

       let response;
       beforeEach( async() => {
        response = await request(app).get('/api/employees').send();
       })

       it('La ruta es correcta', async ()=>{

            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');//Con esto nos aseguramos de que nos devuelve un json
       });

       it('Recibimos un array de empleados', async ()=>{
            expect(response.body).toBeInstanceOf(Array);
       });

    });

    describe('POST /api/employees', () => {

      const newEmployee = { 
         name: 'test employee',
         surnames: 'test surnames',
         role: 'operator',
         employee_id: 222,
         joining_date: '2022-01-01',
         leaving_date: '2022-10-10'
      }

      let response;
      beforeEach( async() => {
       response = await request(app).post('/api/employees').send(newEmployee);
      })

      afterAll(async () => {
         await Employee.deleteMany({ name: 'test employee' });
     });

      it('La ruta es correcta', async () => {
      
         expect(response.status).toBe(200);
         expect(response.headers['content-type']).toContain('json');
      
      });

      it('Se inserta correctamente', async ()=> {

         expect(response.body._id).toBeDefined();
         expect(response.body.name).toBe(newEmployee.name);

      });
      

    });

    describe('POST /api/employees', () => {

      const wrongEmployee = { 
        nombre: 'test employee'
      }

      let response;
      beforeEach( async() => {
       response = await request(app).post('/api/employees').send(wrongEmployee);
      })

      afterAll(async () => {
         await Employee.deleteMany({ name: 'test employee' });
      });

      it('Inserción incorrecta', async () => {
         
         expect(response.status).toBe(500);
         expect(response.body.error).toBeDefined();
     });

    });

    describe('PUT /api/employees', () => {

      let employee;
      beforeEach(async () => {
         employee = await Employee.create({
            name: 'test employee',
            surnames: 'test surnames',
            role: 'operator',
            employee_id: 333,
            joining_date: '2022-01-01',
            leaving_date: '2022-10-10'
         });
      });

      afterEach(async () => {
       await Employee.findByIdAndDelete(employee._id);
      });

      it('La ruta es correcta', async () => {
          const response = await request(app).put(`/api/employees/${employee._id}`).send({
              name: 'employee updated'
          });

          expect(response.status).toBe(200);
          expect(response.headers['content-type']).toContain('json');
      });

      it('Se actualiza correctamente', async () => {
          const response = await request(app).put(`/api/employees/${employee._id}`).send({
              name: 'employee updated'
          });

          expect(response.body._id).toBeDefined();
          expect(response.body.name).toBe('employee updated');
      });

  });

  describe('DELETE /api/employees', () => {

   let employee;
   let response;
   beforeEach(async () => {
       employee = await Employee.create({
         name: 'test employee',
         surnames: 'test surnames',
         role: 'operator',
         employee_id: 444,
         joining_date: '2022-01-01',
         leaving_date: '2022-10-10'
          });
       response = await request(app).delete(`/api/employees/${employee._id}`).send();
   });

   it('La ruta es correcta', () => {
       expect(response.status).toBe(200);
       expect(response.headers['content-type']).toContain('json');
   });

   it('Borrado correcto', async () => {
       expect(response.body._id).toBeDefined();

       const foundEmployee = await Employee.findById(employee._id);
       expect(foundEmployee).toBeNull();
   })

})

});