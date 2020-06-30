const mongoose = require('mongoose')

const envConf = require('../../config.json');


var stringConnection;
var env;

if(process.env.NODE_ENV == 'production'){
    env = envConf[0];

    stringConnection = `mongodb://${env.USER_DB}:${env.PASS_DB}@${env.HOST.M1},${env.HOST.M2},${env.HOST.M3}/${env.DB_NAME}?replicaSet=${env.HOST.RS_NAME}`
    
    console.log('Entorno : produccion')
}else{
    env = envConf[1];
    stringConnection = `mongodb://${env.HOST}/${env.DB_NAME}`;
    
    console.log('Entorno : local');
}

mongoose.connect(stringConnection, {useNewUrlParser: true});



/*
if(process.env.ENTORNO == 'produccion'){
    stringConnection = `mongodb://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.M1},${process.env.M2},${process.env.M3}/${process.env.DB_NAME}?replicaSet=${process.env.RS}`
    mongoose.connect(stringConnection, {useNewUrlParser: true});
    console.log('Entorno : produccion')
}else{
    mongoose.connect(`mongodb://${process.env.HOST_DB_LOCAL}:${process.env.PORT_DB_LOCAL}/${process.env.DB_NAME}` , {useNewUrlParser: true});
    console.log('Entorno : local');
}
*/

mongoose.connection.on('error', (err)=>{
    console.log('Error al conectar con DB: ', env.DB_NAME)
    console.log(err);
});

mongoose.connection.once('open', ()=>{
    console.log('Conectado a BD: ', env.DB_NAME);
});