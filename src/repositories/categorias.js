import config from "../config";

const URL_CAT = `${config.URL_BACKEND}/categorias`;


function getAllWithVideos() {
  return fetch(`${URL_CAT}?_embed=videos`).then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error("Servidor Offline");
  });
}
function getAll() {
  return fetch(`${URL_CAT}`).then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }

    throw new Error("Não foi possível pegar os dados :(");
  });
}

function setNewCategoria(values) {
  return fetch(URL_CAT, {
    method: 'POST',
    body: window.JSON.stringify({ titulo:values.titulo, subtitulo:values.subtitulo, cor:values.cor  }),
    headers: {
      'content-type': 'application/json',
    },
  });
}
export default {
  getAllWithVideos,
  getAll,
  setNewCategoria,
};
