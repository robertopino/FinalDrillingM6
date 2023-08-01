const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidorAnime } = require('../index')
chai.use(chaiHttp);

describe('Probando respuesta del servidor para método POST /anime', (done) => {
    it('Comprueba que el método POST responde con código 200', (done) => {
        chai.request(servidorAnime)
        .post('/anime')
        .send({
            "nombre": "Pokémon",
            "género": "Shonen",
            "año": "1997",
            "autor": "GameFreaks"
        })
        .end((error, respuesta) => {
            chai.expect(respuesta).to.have.status(200);
            done()
        })
    })
})