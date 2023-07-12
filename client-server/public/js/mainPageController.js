class mainPageController{

    constructor(){

        this.sectionCortesEl = document.querySelector("#cortes")
        this.images = document.querySelectorAll('#cortes img')
        this.proximoBtn = document.querySelector ('#proxima-foto')
        this.anteriorBtn = document.querySelector('#anterior-foto')


        this.initEvents();
    }


    initEvents(){

        

        this.proximoBtn.addEventListener('click', e=>{

            let i = 0 

            this.images.forEach(e =>{

            if(i == (this.images.length -1)){
                this.images[i].classList.remove('selected')
                this.images[i].classList.add('hide')

                this.images[0].classList.remove('hide')
                this.images[0].classList.add('selected')
            }

            if(e.classList.value ==='selected'){

                this.images[i].classList.remove('selected')
                this.images[i].classList.add('hide')
                
                this.images[i+1].classList.remove('hide')
                this.images[i+1].classList.add('selected')
            }
            else{i++}
            
        })


        }
        )   
    }

    nextPhoto(){
        
    }
}



