const express = require('express');
const router = express.Router()

const TaskService = require('../services/TaskService');

router.post('/addPendingTask', async (req, res)=>{

    const taskReceived = req.body

    try{
        const task = await TaskService.addPendingTask(taskReceived);
        
        res.send(task);

    }catch(e){
        res.send(e)
    }

});


module.exports = router;