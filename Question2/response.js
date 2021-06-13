module.exports = {
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