class timeScheduleController{

    constructor(){

        this.timebtnSchedule = document.querySelector('#botao-proximo')
        this.inputTime = document.querySelector('#time-schedule')
        this.inputDate = document.querySelector("#schedule")
        this.HourSection = document.querySelector('section#horario')
        this.h1 = document.querySelector('#h1')
        this.buttonNextDay= document.querySelector("#nextDay")
        this.buttonPreviousDay= document.querySelector("#previousDay")
        this.sectionHorario = document.querySelector('section#horario')
        this.menuHamburguer = document.querySelector('#menu-hamburguer')
        this.mainMenudiv = document.querySelector('#list')



        this.initEvents()
    }


    initEvents(){
        this.connectFireBase()

        this.currentDay();


        this.timebtnSchedule.addEventListener("click", ()=>{
            
            this._date;
            let date = this._date;
            let time = this.inputTime.value
            
            let dados = {
            date,
        time}
            this.toSessionStorage(dados); 
        
        })

        this.menuHamburguer.addEventListener('click', e =>{

            this.mainMenudiv.classList.toggle('show')
    
    
        })


        
    }

    currentDay(){

        let day = new Date();
        

        let currentday = day.getDate()


        this.h1.innerHTML = `${day.getDate()}/0${day.getMonth() + 1}/${day.getFullYear()}`


        this.buttonPreviousDay.addEventListener('click', e =>{

            if(currentday <= 1 ){

                currentday = 2
            }

            this.h1.innerHTML = `${currentday - 1}/0${day.getMonth() + 1}/${day.getFullYear()}`

            currentday--
            
            this._date = `${currentday}/0${day.getMonth() + 1}/${day.getFullYear()}`

            this.sectionHorario.classList.toggle('grey')

        })
        
        this.buttonNextDay.addEventListener('click', e =>{

            if (currentday >= 31){ 

                currentday = 0

            }

            this.h1.innerHTML = `${currentday + 1}/0${day.getMonth() + 1}/${day.getFullYear()}`

            currentday++

            
            this._date = `${currentday}/0${day.getMonth() + 1}/${day.getFullYear()}`
       
            
            this.sectionHorario.classList.toggle('grey')
        })

        
        return this._date = `${currentday}/0${day.getMonth() + 1}/${day.getFullYear()}`

    }

    toSessionStorage(dados){

        sessionStorage.setItem('date', dados.date)
        sessionStorage.setItem('time', dados.time)
    
    
    
    
    }

    connectFireBase(){

        const firebaseConfig = {
            apiKey: "AIzaSyASM0agUS7cbuIAlSz0sECopdGRezuwjHE",
            authDomain: "projeto-barbearia-a1310.firebaseapp.com",
            projectId: "projeto-barbearia-a1310",
            storageBucket: "projeto-barbearia-a1310.appspot.com",
            messagingSenderId: "938572052639",
            appId: "1:938572052639:web:81ff21a53b9ebb27d14aaa",
            databaseURL: "https://projeto-barbearia-a1310-default-rtdb.firebaseio.com/"
            
          };
        
          // Initialize Firebase
          const app = firebase.initializeApp(firebaseConfig);
    
    }
    
    getFirebaseRef(){
    
        return firebase.database().ref("DadosCliente")
    }
    

}