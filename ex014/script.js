function carregar(){

    var msg = document.querySelector('#msg');
    var image = document.querySelector('#image');
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        //Bom dia
        image.src = 'images/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        image.src = 'images/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        image.src = 'images/noite.png'
        document.body.style.background = '#515154'
    }
}

