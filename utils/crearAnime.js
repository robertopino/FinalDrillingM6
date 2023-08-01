const fs = require('fs/promises');

const leerArchivoAnimeJson = async () => {
    try {
        const jsonAnime = await fs.readFile('./datos/anime.json')
        return jsonAnime
    } catch (error) {
        console.log(`No fue posible acceder al archivo anime.json: ${error}`);
    }
}

const generadorId = async () => {
    const jsonAnime = await leerArchivoAnimeJson();
    const objetoAnimes = JSON.parse(jsonAnime);
    idAnimes = Object.keys(objetoAnimes);
    if(idAnimes.length == 0) {
        return 1;
    } else if(idAnimes.length > 0) {
        const nuevoId = idAnimes.length + 1;
        return nuevoId;
    }
}

const crearAnime = async(nuevoAnime) => {
    const archivoAnimes = await leerArchivoAnimeJson()
    const objetoAnimes = JSON.parse(archivoAnimes);
    const id = await generadorId();

    objetoAnimes[id] = nuevoAnime;
    await fs.writeFile('./datos/anime.json', JSON.stringify(objetoAnimes, null, 2))
}

module.exports = { crearAnime }