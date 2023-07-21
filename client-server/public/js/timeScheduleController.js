class timeScheduleController{

    constructor(){

        this.timebtnSchedule = document.querySelector('#botao-proximo')
        this.inputTime = document.querySelector('#time-schedule')
        this.inputDate = document.querySelector("#schedule")





        this.initEvents()
    }


    initEvents(){
        this.connectFireBase()
        this.timebtnSchedule.addEventListener("click", ()=>{
            let date = this.inputDate.value
            let time = this.inputTime.value
            
            let dados = {
            date,
        time}
            this.toSessionStorage(dados); 
        
        })


        
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