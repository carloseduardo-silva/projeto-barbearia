
function marcar(){
    resp = document.getElementById('degrade')
    resp.innerHTML = '<h1 id="lado"> Seu horario para corte+sombrancelha em 10 de julho - 14:00 esta marcado ! </h1> <br> <h1 id="lado1">Agradece pela preferencia. </h1>  '

    nomeA = document.getElementById('nome')
    sessionStorage.setItem('nome', nomeA)

    tel1 = document.getElementById('Telefone')
    telreal = Number(tel1)
    sessionStorage.setItem('Telefone', 'telreal')

    corte1 = document.getElementById('corte')
    sessionStorage.setItem('corte',' corte1')

    resp.innerHTML += `<h1  id="lado2"> ${sessionStorage.getItem('nome')} </h1>`
    resp.innerHTML += `<h1 id="lado2"> ${sessionStorage.getItem('Telefone')} </h1>`
    resp.innerHTML += `<h1 id="lado2"> ${sessionStorage.getItem('corte')} </h1>`
}