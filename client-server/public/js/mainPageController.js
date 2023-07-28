class mainPageController{

    constructor(){

        this.sectionCortesEl = document.querySelector("#cortes")
        this.images = document.querySelectorAll('#cortes img')
        this.btnsControll = document.querySelectorAll('button')
        this.sectionCortes = document.querySelector('#cortes')
        this.itens = document.querySelectorAll('.item')

        this.initEvents();
    }


    initEvents(){

        const maxItens = this.itens.length

        let currentItem = 0 

        this.btnsControll.forEach( btn =>{

            btn.addEventListener('click', e=>{

             let isLeft = e.target.classList.contains('arrow-left');

             if(isLeft){
                currentItem -= 1;
             }
             else{
                currentItem += 1;
             }

             if(currentItem >= maxItens ){
                currentItem = 0;
             }

             if(currentItem < 0){

                currentItem = maxItens -1
             }
             this.itens.forEach( item =>{

                item.classList.remove('selected')

                this.itens[currentItem].scrollIntoView({
                    behavior: "smooth",
                    inline: "center"
                  });
                 
                this.itens[currentItem].classList.add('selected');
             });;
            })

        })


       
    }

    nextPhoto(){
        
    }
}



