const chaveAPI = "c2948389" //Chave API registro Vítor

$.ajax({
    method : 'GET',
    url : `http://www.omdbapi.com/?apikey=${chaveAPI}&t=babe`,
    success : (data) => {
        console.log(data);
        $("#capa").html(`
        <img class="imgCapa" id="imgRetorno" src="${data.Poster}">
        `);
    }
})