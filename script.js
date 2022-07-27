
function marcar(){
    resp = document.getElementById('degrade')
    resp.innerHTML = '<h1 id="lado"> Agendamento Concluído! </h1> <br> <h1 id="lado1">Agradece pela preferencia. </h1>  '

    

    var corte1 = document.getElementById('corte')
    sessionStorage.setItem('corte', corte1.value)
    corte1.innerHTML = ' '

    var data1 = document.getElementById('dia')
    sessionStorage.setItem('dia', data1.value)
    data1.removeAttribute 

    var hora1 = document.getElementById('hora')
    sessionStorage.setItem('hora', hora1.value)
    

    resp.innerHTML += `<h1 id="lado2">  Seu horario para ${sessionStorage.getItem('corte')} </h1>`
    resp.innerHTML += `<h1 id="lado2"> em ${sessionStorage.getItem('dia')} - ${sessionStorage.getItem('hora')} esta marcado. </h1>`
    
}