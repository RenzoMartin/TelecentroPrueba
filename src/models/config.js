const mongoose = require('mongoose')

mongoose.connect(`mongodb://${process.env.HOST_DB}:${process.env.PORT_DB}/${process.env.DB_NAME}` , {useNewUrlParser: true});

mongoose.connection.on('error', (err)=>{
    console.log('Error al conectar con DB: ', process.env.DB_NAME)
    console.log(err);
});

mongoose.connection.once('open', ()=>{
    console.log('Conectado a BD: ', process.env.DB_NAME);
});