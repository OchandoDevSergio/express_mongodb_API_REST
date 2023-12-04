const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');

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


});