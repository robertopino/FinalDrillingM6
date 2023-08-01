const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidorAnime } = require('../index')
chai.use(chaiHttp);

describe('Probando respuesta del servidor para método PUT /anime', (done) => {
    it('Comprueba que el método PUT responde con código 200', (done) => {
        chai.request(servidorAnime)
        .put('/anime?id=9')
        .send({
            "nombre": "Digimon",
            "género": "Shonen",
            "año": "2002",
            "autor": "JapanCo."
        })
        .end((error, respuesta) => {
            chai.expect(respuesta).to.have.status(200);
            done()
        })
    })
})