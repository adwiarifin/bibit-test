const movieOutbound = require('./movie.outbound');
const response = require('../../response');

const search = async (query) => {
    if (!query) return response.json(undefined, response.BAD_REQUEST, ':query is required');

    const result = await movieOutbound.search(query);
    return response.json(result.data);
}

const detail = async (id) => {
    if (!id) return response.json(undefined, response.BAD_REQUEST, ':id is required');

    const result = await movieOutbound.detail(id);
    return response.json(result.data);
}

module.exports = {
    search,
    detail,
}