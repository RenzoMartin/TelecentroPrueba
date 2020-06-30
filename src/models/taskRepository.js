const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    args : {
        transactionId : String,
        customerId : String,
        productId : String,
        options : [],
    },
    priority : Number,
    queue : String,
    operation : String,
    status : String,
    creationDate : Date,
    finishedDate : Date
} , {collection : "pendingTask", versionKey : false});

TaskSchema.statics.addTask = async function addTask(taskReceived){
    
    try {
        var task = new TaskModel(taskReceived)
        
        await TaskModel.create(task)

        return taskReceived;

    } catch (error) {
        //devolver el error que yo quiera
        throw error    
    }
}

TaskSchema.statics.getById = async function getById(transactionId){
    try {
        var filter = {
            "args.transactionId" : transactionId
        }

        const task = await TaskModel.findOne(filter, {_id : 0, __v: 0});
        
        return task;
    } catch (error) {
        throw error
    }
}

TaskSchema.statics.getPendingTasks = async function getPendingTasks(){
    try {
        const tasks = await TaskModel.find({},{_id : 0, __v : 0})

        return tasks;

    } catch (error) {
        throw error;
    }
}


const TaskModel = mongoose.model('Task', TaskSchema);



module.exports = TaskModel;