class mainPageController{

    constructor(){

        this.sectionCortesEl = document.querySelector("#cortes")
        this.images = document.querySelectorAll('#cortes img')
        this.proximoBtn = document.querySelector ('#proxima-foto')
        this.anteriorBtn = document.querySelector('#anterior-foto')


        this.initEvents();
    }


    initEvents(){

        this.anteriorBtn.addEventListener('click', e =>{

            let i = 1

            this.images.forEach(e =>{

                if(e.classList.value === 'selected'){
                    this.images[i].classList.remove('selected')
                    this.images[i].classList.add('item')
                    this.images[i-1].classList.remove('item')
                    this.images[i-1].classList.add('selected')


                }
            })

        })

        this.proximoBtn.addEventListener('click', e=>{

            let i = 0 

            this.images.forEach(e =>{

            if(i == (this.images.length -1)){
                this.images[i].classList.remove('selected')
                this.images[i].classList.add('item')
              

                this.images[0].classList.remove('item')
                this.images[0].classList.add('selected')

                 this.images[0].scrollIntoView({
                    behavior: "smooth",
                    inline: "center"
                  });
            }

            if(e.classList.value ==='selected'){

                this.images[i].classList.remove('selected')
                this.images[i].classList.add('item')
                this.images[i+1].classList.remove('item')
                this.images[i+1].classList.add('selected')

                this.images[i].scrollIntoView({
                    behavior: "smooth",
                    inline: "center"
                  });
            }
            else{i++}
            
        })


        }
        )   
    }

    nextPhoto(){
        
    }
}



