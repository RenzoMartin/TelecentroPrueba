const TaskService = require('../../../services/TaskService');

async function getBlockingOperations(req, res){
    try {
        var transactionId = req.headers["x-an-webservice-transaction-source-id"];

        const tasks = await TaskService.getPendingTasks(transactionId);

        res.send(tasks);

    } catch (error) {
        res.send(error);
    }

}

module.exports = getBlockingOperations;