const mongoose = require('mongoose')

const TaskInfoSchema = new mongoose.Schema({
    tipo : String,
    priority : Number,
    queue : String
}, {collection : "tasksInfo"});


TaskInfoSchema.statics.getTaskInfo = async function getTaskTemplate(filter){

    try {        
        const taskInfo = await TaskInfoModel.findOne(filter, {_id : 0, __v : 0, tipo:0});

        return taskInfo;
    } catch (error) {
        throw error
    }
}

const TaskInfoModel = mongoose.model('taskInfo', TaskInfoSchema);


module.exports = TaskInfoModel;