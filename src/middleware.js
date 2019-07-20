'use strict'

module.exports = {
    gracefulHandle: function(req, res, next) {
        try {
            res.setHeader('content-type', 'application/json');
            next();
        } catch (err) {
            next(err);
        }
    },
    error: function(err, res) {
        res.status(500).send(err.stack);
    }
}