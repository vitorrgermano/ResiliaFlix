const chaveAPI = "c2948389" //Chave API registro Vítor
const filme = ["love","tomorrow","home","harry","apocalypse"];

for (let j = 0; j < filme.length; j++) {
    try {
        $.ajax({
            method: 'GET',
            url: `https://www.omdbapi.com/?apikey=${chaveAPI}&s=${filme[j]}`,
            success: (data) => {
                if (data.Response == "False") throw new Error(data.Error);
                for (let i = 0; i < data.Search.length; i++) {
                    console.log(data.Search[i]);
                    $("#retorno").append(`
                <div class="filmeInfo">
                <h6>Título: ${data.Search[i].Title}</h6>
                <h6>Ano do filme: ${data.Search[i].Year}</h6>
                <img class="imgCapa" id="${data.Search[i].imdbID}"src="${data.Search[i].Poster}">
                </div>
                `);
                    $(`#${data.Search[i].imdbID}`).click(() => {
                        buscaInfoID(data.Search[i].imdbID);
                    })
                }
            }
        })
    } catch (erro) {
        console.log(erro)
    }
}

function buscaInfoID(id){
    let retorno = ""
    $.ajax({
        method: 'GET',
        url: `https://www.omdbapi.com/?apikey=${chaveAPI}&i=${id}`,
        success: (data) => {
            if (data.Response == "False") {
                return alert(data.Error);
            } else {
                console.log(data);
                retorno = `
            <img id="imgRetorno" src="${data.Poster}">
            <h4>Título: ${data.Title}</h4>
            <h4>Ano do filme: ${data.Year}</h4>
            <h4>País: ${data.Country}</h4>
            <h4>Gênero: ${data.Genre}</h4>
            <h4>Duração: ${data.Runtime}</h4>
            <h4>Rating: ${data.imdbRating}</h4>
            <h4>Quantidade de votos: ${data.imdbVotes}</h4>
            <h4>Sinopse: ${data.Plot}</h4>
            <a href="./index.html"><button>Retornar a página inicial</button></a>
            `;
                $("#retorno").html(retorno);
            }
        }
    })
}


