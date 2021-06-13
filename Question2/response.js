module.exports = {
    BAD_REQUEST: {
        status: 400,
        type: 'BAD_REQUEST',
        message: 'Invalid request'
    },
    json(data, err, errMessage) {
        let response = {};

        if (err) {
            response.status = err.status || 500;
            response.error = err;
            if (errMessage) {
                response.error.message = errMessage.message || errMessage;
            }
            response.data = data;

            return response;
        }

        response.status = 200;
        response.data = data;

        return response;
    }
}