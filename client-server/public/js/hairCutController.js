class hairCutController{

    constructor(){

        this.hairCutTypebtnSchedule = document.querySelector('#corte-marcar')
        this.menuHamburguer = document.querySelector('#menu-hamburguer')
        this.mainMenudiv = document.querySelector('#list')


        this.initEvents();
    }


    initEvents(){

        this.connectFireBase()

        let buttons = document.querySelectorAll('.btn')

        buttons.forEach(btn =>{
            btn.addEventListener('click', e=>{
                btn.classList.toggle('selected')
            })
        })

        this.hairCutTypebtnSchedule.addEventListener("click", ()=>{
         

            let i = 0
            document.querySelectorAll('.selected').forEach(btn=>{
                sessionStorage.setItem(`servico ${i}`, btn.innerHTML)
                console.log(btn.innerHTML)
                i++
            })
        
        })

        this.menuHamburguer.addEventListener('click', e =>{

            this.mainMenudiv.classList.toggle('show')


    })


        
    }

    toSessionStorage(dados){

       // sessionStorage.setItem('', dados.)
    
    
    
    
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
    
// desenvolver script de seleção adicionando classe ao button clicado e exibindo ele no console.
/*

let buttons = document.querySelectorAll('.btn btn-primary btn-lg')

let proximoBtn = document.querySelector('#corte-marcar')


proximoBtn.addEventListener('click', e=>{

    console.log(buttons)


})*/
}