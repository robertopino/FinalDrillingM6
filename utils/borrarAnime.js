const fs = require('fs/promises');

const leerArchivoAnimeJson = async () => {
    try {
        const jsonAnime = await fs.readFile('./datos/anime.json')
        return jsonAnime
    } catch (error) {
        console.log(`No fue posible acceder al archivo anime.json: ${error}`);
    }
}

const deleteAnime = async(id) => {
    const archivoAnimes = await leerArchivoAnimeJson();
    const objetoAnimes = JSON.parse(archivoAnimes);
    delete objetoAnimes[id]
    await fs.writeFile('./datos/anime.json', JSON.stringify(objetoAnimes, null, 2))
}

module.exports = { deleteAnime }