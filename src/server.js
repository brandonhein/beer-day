'use strict'

module.exports = {
    start: function(app) {
        var portNumber = 8081;
        if (process.env.PORT) {
            portNumber = process.env.PORT;
        }

        console.log("Beer-Day is listening on port: " + portNumber);
        app.listen(portNumber);
    }
}