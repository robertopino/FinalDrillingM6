const fs = require('fs/promises');

const leerArchivoAnimeJson = async () => {
    try {
        const jsonAnime = await fs.readFile('./datos/anime.json')
        return jsonAnime
    } catch (error) {
        console.log(`No fue posible acceder al archivo anime.json: ${error}`);
    }
}

const updateAnime = async(id, datosParaModificar) => {
    const archivoAnimes = await leerArchivoAnimeJson()
    const objetoAnimes = JSON.parse(archivoAnimes);
    const animePorModificar = objetoAnimes[id];
    const animeModificado = {...animePorModificar, ...datosParaModificar}

    objetoAnimes[id] = animeModificado;

    await fs.writeFile('./datos/anime.json', JSON.stringify(objetoAnimes, null, 2));
}

module.exports = { updateAnime }