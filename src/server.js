'use strict'

module.exports = {
    start: function(app) {
        var portNumber = 8081;
        if (process.env.PORT) {
            portNumber = process.env.PORT;
        }

        app.listen(portNumber, function(req, res){
            console.log("Beer-Day is running on port: " + portNumber);
        });
    }
}