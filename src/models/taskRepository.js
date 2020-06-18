const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    id_tx : {
        type : String,
        required : true,
        unique : true
    },
    taskDesc : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    date : {
        type : Date
    }
});

TaskSchema.statics.addTask = async function addTask(taskReceived){
    
    try {
        taskReceived.state = 'pendiente';
        taskReceived.date = new Date();

        var task = new TaskModel(taskReceived)
        
        await TaskModel.create(task)

        return taskReceived;

    } catch (error) {
        //devolver el error que yo quiera
        throw error    
    }
}

TaskSchema.statics.getById = async function getById(data){
    
    try {
        const task = await TaskModel.findOne(data, {_id : 0, __v : 0});

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