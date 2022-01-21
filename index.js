const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./app/routes/users.routes');

// parse request content-type - application/json
app.use(bodyParser.json());

// parse request content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
   
routes(app);
   
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});