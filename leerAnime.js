const { leerArchivoAnimeJson } = require('./leerArchivoAnimeJson')
const namesAnimes = []
const indexAnimes = []

const leerAnime = async () => {
    const jsonAnime = await leerArchivoAnimeJson()
    const objetoAnimes = JSON.parse(jsonAnime)
    const idAnimes = Object.keys(objetoAnimes);

    for (const anime of Object.values(objetoAnimes)) {
        namesAnimes.push(anime.nombre);
    }

    for (let i = 0; i < idAnimes.length; i++) {
        indexAnimes.push([namesAnimes[i], idAnimes[i]])
    }
    const objetoIndiceAnimes = Object.fromEntries(indexAnimes)

    return { objetoIndexAnimes, objetoAnimes, idAnimes, namesAnimes }
}

module.exports = { leerAnime }