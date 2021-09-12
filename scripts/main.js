const chaveAPI = "c2948389"

$.ajax({
    method : 'GET',
    url : `http://www.omdbapi.com/?apikey=${chaveAPI}&t=babe`,
    success : (data) => {
        console.log(data);
        $("#capa").html(`
        <img class="imgCapa" id="imgRetorno" src="https://m.media-amazon.com/images/M/MV5BYjg4ZjUzMzMtYzlmYi00YTcwLTlkOWUtYWFmY2RhNjliODQzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg">
        <img class="imgCapa" id="imgRetorno" src="https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg">
        <img class="imgCapa" id="imgRetorno" src="https://m.media-amazon.com/images/M/MV5BOTM5N2ZmZTMtNjlmOS00YzlkLTk3YjEtNTU1ZmQ5OTdhODZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg">
        <img class="imgCapa" id="imgRetorno" src="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg">
        `);
    }
})

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
                capa.style.display = "none";
                retorno = `
                <img id="imgRetorno" src="${data.Poster}">
                <h4>${data.Year}</h4>
                <h4>${data.Country}</h4>
                <h4>${data.Genre}</h4>
                <h4>${data.Runtime}</h4>
                <h4>${data.imdbRating}</h4>
                <h4>${data.imdbVotes}</h4>
                <h4>${data.Plot}</h4>
                `;
                $("#retorno").html(retorno);
            }
        })
    })
})