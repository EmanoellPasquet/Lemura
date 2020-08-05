import config from "../config";

const URL_CAT = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CAT}`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
return fetch(`${URL_CAT}?_embed=videos`)
  .then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Servidor Offline')
  });
}

export default {
  getAllWithVideos,
  getAll,
};
