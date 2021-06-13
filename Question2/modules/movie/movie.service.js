const movieOutbound = require('./movie.outbound');
const response = require('../../response');

const search = async (query) => {
    const result = await movieOutbound.search(query);
    return response.json(result.data);
}

const detail = async (id) => {
    const result = await movieOutbound.detail(id);
    return response.json(result.data);
}

module.exports = {
    search,
    detail,
}