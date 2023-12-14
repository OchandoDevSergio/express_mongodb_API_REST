# API Gestión de empleados

## Tecnologías utilizadas
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat)](https://www.mongodb.com/docs/) [![Mongoose](https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=flat)](https://mongoosejs.com/docs/) [![ExpressJS](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/) [![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=flat)](https://jestjs.io/es-ES/docs/getting-started) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)

## Indice 

- [Descripción general del proyecto :speech_balloon:](#descripción-general-del-proyecto)

- [Modo de empleo :on:](#modo-de-empleo)

- [Endpoints :end:](#endpoints)   

#

### Descripción general del proyecto

Este repositorio contiene una API para la gesitón (*CRUD*) de una *base de datos no relacional* de empleados. Con un apartado de testing tanto para rutas, como para la correcta ejecución de las órdenes.

### Modo de empleo

Pasos para lanzar la aplicación:

1- Ejecutamos *Mongod* para levantar el servidor de la base de datos de MongoDB.

2- Abrimos el repositorio de la API con el editor de código y ejecutamos uno de los siguientes códigos por la términal en función de si deseamos hacer cambios en el repositorio o no:

npm run dev

npm start

3- Ejecutamos el siguiente comando en un nuevo terminal para generar la base de datos a la vez que la sembramos con los datos de empleados que hemos pregenerado:

node ./data/employees.data.js

Tras ejecutarlo y comprobar que se ha generado la base de datos y se han añadido los datos pregenerados de empleados, podemos cerrar este segundo terminal.

4- Si se desea realizar el testing, simplemente ejecutamos el siguiente comando por la términal de nuestro editor de código:

npm test

### Endpoints

**Traer todos los empleados:** GET, http://localhost:5000/api/employees

**Añadir un empelado:** POST, http://localhost:5000/api/employees

**Modificar un empleado:** PUT, http://localhost:5000/api/employees/:employeeId

**Eliminar un empleado:** GET, http://localhost:5000/api/employees/:employeeId

