const axios = require('axios');
const baseURL = 'http://omdbapi.com';
const apiKey = process.env.OMDB_KEY;
const queries = require('../../db/queries');

const get = async (url) => {
    const result = await axios.get(url);
    await queries.insert('log_api', {
        method: 'GET',
        url: url,
        body: null,
        response: JSON.stringify(result.data),
    });
    return result;
}

const search = async (query) => {
    const url = `${baseURL}?apikey=${apiKey}&s=${query}`;
    return get(url);
}

const detail = async (id) => {
    const url = `${baseURL}?apikey=${apiKey}&i=${id}`;
    return get(url);
}

module.exports = {
    search,
    detail,
}