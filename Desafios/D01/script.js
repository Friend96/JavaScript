var data = new Date()
var hora = data.getHours()

var texto = document.getElementById("texto")
var imagem = document.getElementById('imagem')

texto.innerText = `Agora são ${hora}  horas`

if(hora >= 5 && hora < 12){
    document.body.style.backgroundColor = '#ffff67'
    imagem.style.backgroundImage = 'url(manhã-unsplash_resized.jpg)'
}

else if(hora >= 12 && hora <= 17){
    document.body.style.backgroundColor = '#ff8b3d'
     imagem.style.backgroundImage = 'url(tarde-unsplash_resized.jpg)'
}

else if(hora > 17 && hora <= 24){
    document.body.style.backgroundColor = "#00012b"
     imagem.style.backgroundImage = 'url(noite-unsplash_resized.jpg)'
}

else{
    document.body.style.backgroundColor = "#414141"
     imagem.style.backgroundImage = 'url(madrugada-unsplash_resized.jpg)'
}