const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

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

//rutas
app.use('/', require('./controllers/principal/controllers/mainController'));

//iniciando servidor
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
})