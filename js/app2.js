
let thumb = document.getElementsByClassName('thumb')

let active = document.getElementsByClassName('active')



for(var i=0; i<thumb.length;i++){
    thumb[i].addEventListener('mouseover', function(){
        
        if(active.length > 0){
            active[0].classList.remove('active')
        }
        

        this.classList.add('active')
        document.getElementById('featured').src=this.src
    })

}

