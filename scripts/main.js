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
                retorno = `<img src="${data.Poster}">`;
                $("#retorno").html(retorno);
            }
        })
    })
})