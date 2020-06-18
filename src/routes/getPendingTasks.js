const express = require('express');
const router = express.Router()

const TaskService = require('../services/TaskService')

router.post('/getPendingTasks', async (req, res)=>{
    try {
        
        const data = req.body;

        const tasks = await TaskService.getPendingTasks(data);
    
        res.send(tasks);

    } catch (error) {
        res.send(error);
    }

});


module.exports = router;