   class clientDataController{

   constructor(){

    this.clientname = document.querySelector("input#nome")
    this.clientemail = document.querySelector("input#email")
    this.clienttelefone = document.querySelector("input#telefone")
    this.marcarHorarioBtn = document.querySelector("#botao-marcar")
    this.corteBtn = document.querySelector("#corte-marcar")
    this.inputDate = document.querySelector("#schedule")

    this.initEvents();
    

   }
    
   
   
   initEvents(){
   
    this.connectFireBase()

    this.marcarHorarioBtn.addEventListener("click", ()=>{
        let name = this.clientname.value
        let email = this.clientemail.value
        let tel = this.clienttelefone.value
        //let schedule = this.inputDate.value

        let dados = [name, email, tel]
        console.log(dados)
        this.getFirebaseRef().push().set(dados)

    })

    

    
    
}
//passar o script src no html.
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

