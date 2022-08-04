
    function concluido() {
        var cortereal = document.getElementById('corte')
        sessionStorage.setItem('corte', cortereal.value)
    
        var volta = document.getElementById('resposta')
        volta.innerHTML = ` Horario marcado para ${sessionStorage.getItem('corte')}. `

        
        var datareal = document.getElementById('dia')
        sessionStorage.setItem('dia', datareal.value)
        document.getElementById("dia").style.display="none";
        
        
        var horareal = document.getElementById('hora')
        sessionStorage.setItem('hora', horareal.value)
        document.getElementById("hora").style.display="none";
        
        resp = document.getElementById('degrade')
        resp.innerHTML = '<h1 id="lado"> Agendamento Concluído! </h1> <br> <h1 id="lado1">Agradece pela preferencia. </h1>  '

        resp.innerHTML += `<h1 id="lado2">  Seu horario para ${sessionStorage.getItem('corte')} </h1>`
        resp.innerHTML += `<h1 id="lado2"> em ${sessionStorage.getItem('dia')} - ${sessionStorage.getItem('hora')} esta marcado. </h1>`
    
    
    }

