const request = require('request');

class ExternalWs{

    async addedTask(id, callback) {
        var uri = process.env.SCHEDULER_IP;
        var port = process.env.SCHEDULER_PORT;
        
        var package_data = {
            url : `http://${uri}:${port}/addedTask?id_tx=${id}`,
            json : true
        }

        try {
            const response = await request(package_data);
            
            return callback(response)
        } catch (error) {
            throw error;
        }


    }
}

module.exports = new ExternalWs()