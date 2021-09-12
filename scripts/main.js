$(document).ready(()=> {
    const chaveAPI = "c2948389"
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
                <img src="${data.Poster}">
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