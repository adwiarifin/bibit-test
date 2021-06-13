const movieService = require('./movie.service');

const search = async (req, res) => {
    const { params: { query } } = req;
    const result = await movieService.search(query);
    res.status(result.status).json(result);
}

const detail = async (req, res) => {
    const { params: { id } } = req;
    const result = await movieService.detail(id);
    res.status(result.status).json(result);
}

module.exports = {
    search,
    detail,
}