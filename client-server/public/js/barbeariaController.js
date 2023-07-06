   class barbeariaController{

   constructor(){

    this.clientname = document.querySelector("#name")
    this.clientemail = document.querySelector("#email")
    this.clienttelefone = document.querySelector("#telefone")
    this.marcarHorarioBtn = document.querySelector("#botao-marcar")

    this.initEvents();

   }
    
   
   
   initEvents(){

    this.marcarHorarioBtn.addEventListener("click", ()=>{
        console.log(this.clientname)

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
        appId: "1:938572052639:web:81ff21a53b9ebb27d14aaa"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

}




   }

