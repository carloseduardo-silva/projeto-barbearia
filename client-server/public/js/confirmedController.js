class confirmedController{

    constructor(){

        
        this._servicoEl  = document.querySelector('#servico-el')
        this._dateEl = document.querySelector('#date-el')
        this._timeEl = document.querySelector('#time-el')
        this.menuHamburguer = document.querySelector('#menu-hamburguer')
        this.mainMenudiv = document.querySelector('#list')
        
        this.init()

    }

    init(){

        this._dateEl.innerHTML = sessionStorage.getItem('date')
        this._timeEl.innerHTML = sessionStorage.getItem('time')
        let servicos = []
        for (let i = 0; i < 4; i++) {
            if(sessionStorage.getItem(`servico ${i}`)) {

                servicos.push(sessionStorage.getItem(`servico ${i}`))

            }}
        this._servicoEl.innerHTML = servicos.join(" + ")

        this.menuHamburguer.addEventListener('click', e =>{

            this.mainMenudiv.classList.toggle('show')
    
    
        })
        
    }
}