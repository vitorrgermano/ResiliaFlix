const chaveAPI = "c2948389" //Chave API registro Vítor
var filme = ["love","tomorrow","home","harry"];

for(let j=0; j<filme.length; j++){
try {
    $.ajax({
        method: 'GET',
        url: `http://www.omdbapi.com/?apikey=${chaveAPI}&s=${filme[j]}`,
        success: (data) => {
            if (data.Response == "False") throw new Error(data.Error);
            console.log(data.Search);
            for (let i = 0; i < data.Search.length; i++) {
                $("#retorno").append(`
                <div class="filmeInfo">
                <h6>Título: ${data.Search[i].Title}</h6>
                <h6>Ano do filme: ${data.Search[i].Year}</h6>
                <img class="imgCapa" src="${data.Search[i].Poster}">
                </div>
                `);
            }
        }
    })
} catch (erro) {
    console.log(erro)
}
}
