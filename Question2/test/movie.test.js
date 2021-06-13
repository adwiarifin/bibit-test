const request = require('supertest')
const expect = require('chai').expect;
const app = require('../app');
// const axios = require('axios');

describe('Testing movie', () => {
    it('can get search api', (done) => {
        const title = 'batman';
        request(app)
            .get(`/api/movie/search/${title}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                console.log('masuk then');
                expect(response.body).to.haveOwnProperty('status');
                expect(response.body).to.haveOwnProperty('data');
                expect(response.body.data).to.haveOwnProperty('Search');
                done();
            }).catch((e) => {
                console.log('masuk catch');
                console.log(e);
            })
    });

    it('can get detail api', (done) => {
        const id = 'tt0372784';
        request(app)
            .get(`/api/movie/detail/${id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.haveOwnProperty('status');
                expect(response.body).to.haveOwnProperty('data');
                expect(response.body.data).to.haveOwnProperty('Title');
                done();
            }).catch((e) => {
                console.log(e);
            })
    });

    it('can not get search api, no title', (done) => {
        const title = '';
        request(app)
            .get(`/api/movie/search/${title}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(404)
            .then(() => {
                done();
            }).catch((e) => {
                console.log(e);
            })
    });

    it('can not get detail api, no id', (done) => {
        const id = '';
        request(app)
            .get(`/api/movie/detail/${id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /html/)
            .expect(404)
            .then(() => {
                done();
            }).catch((e) => {
                console.log(e);
            })
    });
});