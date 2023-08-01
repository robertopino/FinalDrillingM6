const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidorAnime } = require('../index')
chai.use(chaiHttp);

describe('Probando respuesta del servidor para método GET /anime', (done) => {
    it('Comprueba que el método GET responde con código 200', (done) => {
        chai.request(servidorAnime)
        .get('/anime')
        .end((error, respuesta) => {
            chai.expect(respuesta).to.have.status(200);
            done()
        })
    })

    it('Comprueba que el GET devuelva texto', (done) => {
        chai.request(servidorAnime)
        .get('/anime')
        .end((error, respuesta) => {
            chai.expect(respuesta.text).to.be.a('string');
            done()
        })
    })
})