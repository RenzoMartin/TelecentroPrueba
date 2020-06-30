/**
 * 
 * @param {customerId} ID de cliente (Obligatorio)
 * @param {transactionId} ID de transaccion (Obligatorio) 
 * 
 * @desc Se encarga de corroborar que tanto el customerId, como el transactionId esten presentes.
 * Caso Verdadero : Se le otorga el control a "controladorBloqueo"
 * Caso falso : Se le retorna error a CRM
 */

function postValidator(req, res, next){
    var args = req.body;
    args.transactionId = req.headers['x-an-webservice-transaction-source-id'];
    if(isValidGeneral(args)){

        if(isValidDesbloqueo(args)){
            next();
        }else if(isValidDnu(args)){
            next()
        }else if(isValidMora(args)){
            next()
        }else if(isValidFraude(args)){
            next()
        }else{
            res.send('Error : Parametros');
        }
    }else{
        res.send('Error : Parametros');
    }
}

function isValidGeneral(args){
    if((args.customerId) && args.transactionId && (args.tipo != undefined)){
        return true;
    }
    return false;
}

function isValidDesbloqueo(args){
    if((args.tipo == 0) && args.options && args.productId){
        return true;
    }
    return false;
}

function isValidDnu(args){
    if((args.tipo == 1)){
        return true
    }
    return false;
}

function isValidMora(args){
    if((args.tipo == 2)){
        return true
    }
    return false;
}
 
function isValidFraude(args){
    if((args.tipo == 3)){
        return true;
    }
    return false;
}

module.exports = {
    postValidator
};