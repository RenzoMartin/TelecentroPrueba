const path = require('path');

require('dotenv').config();

const express = require('express');
const app = express();

const morgan = require('morgan');


//iniciando DB
require('./models/config');


//config app
app.set('port', process.env.LISTEN_PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//middlewares validadores

//app.use(require('./routes/middlewares/validator'))

//rutas
app.use(require('./routes/addPendingTask'));
app.use(require('./routes/getPendingTasks'));


//iniciando servidor
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
})