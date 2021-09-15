const chaveAPI = "c2948389" //Chave API registro Vítor

$(document).ready(()=> {
    $("#movieForm").submit((e)=>{
        e.preventDefault()
        let filme = $("#filme").val()
        let url = `http://www.omdbapi.com/?apikey=${chaveAPI}&t=${filme}`
        let retorno = ""
        $.ajax({
            method : 'GET',
            url : url,
            success : (data) => {
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
                `;
                $("#retorno").html(retorno);
            }
        })
    })
})

// AINDA IREI TRABALHAR NO JS PARA TRABALHAR O ERRO CASO NÃO TENHA O FILME PROCURADO!
 