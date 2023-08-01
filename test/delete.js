const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidorAnime } = require('../index')
chai.use(chaiHttp);

describe('Probando respuesta del servidor para método DELETE /anime', (done) => {
    it('Comprueba que el método DELETE responde con código 200', (done) => {
        chai.request(servidorAnime)
        .delete('/anime?id=null')
        .end((error, respuesta) => {
            chai.expect(respuesta).to.have.status(200);
            done();
        })
    })
})