import config from "../config";

const URL_CAT = `${config.URL_BACKEND}/categorias?_embed=videos`;

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
};
