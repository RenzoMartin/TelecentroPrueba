const TaskService = require('../../../services/TaskService');

async function nuevaOperacionBloqueo(req, res){
    var args = req.body;
    args.transactionId = req.headers['x-an-webservice-transaction-source-id'];

    try{
        const task = await TaskService.addPendingTask(args);
        
        res.send(task);
    }catch(e){
        res.send(e)
    }
}

module.exports = nuevaOperacionBloqueo;