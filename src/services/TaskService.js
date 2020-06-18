const taskRepository = require('../models/taskRepository');

const Task = require('../models/taskRepository');


class TaskService{

    async addPendingTask(task){

        try{
            
            const taskSaved = await Task.addTask(task);

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
    async getPendingTasks(data){

        if(data.id_tx == 'none'){
            try {
                const tasks = await Task.getPendingTasks();

                return tasks;

            } catch (error) {
                
            } 
        
        }else{
            try {
                const task = await Task.getById(data);

                if(task === null){
                    return {error : 'task not found'}
                                    
                }else{
                    return task;
                }

            } catch (error) {
                throw error
            }
        }
    }

}

module.exports = new TaskService()