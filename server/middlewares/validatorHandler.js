const boom = require('@hapi/boom');

function validatorHandler (schema, prop) {
    return function (req, res, next) {
        const result = schema.validate(req[prop], { abortEarly: false });
        if (result.error) {
            next(boom.badData(result.error.details[0].message));
        }
        next();
    }
}

module.exports= {
    validatorHandler
}