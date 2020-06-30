const TaskInfo = require('../models/taskInfoRepository');


class TaskCreator{
    
    async getTaskTemplate(filter, args){

        try {
            const taskTemplate = await TaskInfo.getTaskInfo(filter);

            if(taskTemplate == null){
                
                throw {error : 'task description not found'}
            
            }else{

                var taskCreated = {
                    args: args,
                    priority : taskTemplate.priority,
                    queue : taskTemplate.queue,
                    operation : "blocking",
                    status : 'pending',
                    creationDate : new Date(),
                    finishedDate : null
                }
                        
                return taskCreated
            }

        } catch (error) {
            throw error;
        }
    }
}

module.exports = new TaskCreator()