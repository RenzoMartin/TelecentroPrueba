const taskRepository = require('../models/taskRepository');
const externalWs = require('../services/ExternalWs')
const taskCreator = require('../services/TaskCreator');
const Task = require('../models/taskRepository');


class TaskService{

    async addPendingTask(args){
        try{

            const filter = {
                tipo : args.tipo
            }
            
            const task = await taskCreator.getTaskTemplate(filter, args);

            const taskSaved = await Task.addTask(task);
                
            //aviso al scheduler que se añadio la tarea
            /*
            externalWs.addedTask(taskSaved.id_tx, (response)=>{
                console.log('scheduler avisado');
            });
            */
            return taskSaved;

        }catch(e){
            throw e
        }
        
    }


    /**
     * @method
     * @desc Obtiene una, o una lista de tareas pendientes de la coleccion de mongo
     * @version 1.0
     *
     * @param {id} id_tx el task id de crm, para recuperar el estado una tarea en particular.
     *              Si el parametro es null, se devuelven todas las tareas pendientes.
     *  
     */
    async getPendingTasks(transactionId){

        if(transactionId){ 
            try {
                const task = await Task.getById(transactionId);
                
                if(task === null){
                    return {error : 'transactionID not found'}      
                }else{
                    return task;
                }

            } catch (error) {
                throw error
            }
        }else{
            try {
                const tasks = await Task.getPendingTasks();

                return tasks;

            } catch (error) {
                throw error;
            }
        }
    }
}

module.exports = new TaskService()