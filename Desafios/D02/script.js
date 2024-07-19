var data = new Date()
var anoAtual = data.getFullYear()

var res = document.getElementById('resultado-p')

function clicou(){
    var nascimento = document.getElementById('ano').value
    var sexo = document.querySelector("input[name='sexo']:checked")
    var idade = anoAtual - nascimento
    var img = document.getElementById('imagem')

    res.innerText = `Detectamos ${sexo.value} com ${idade} anos`
    
    if(sexo.value == "homem"){
        if(idade >= 0 && idade <= 14){
            img.src = 'menino - unsplash.jpg'
        }

        else if(idade >= 15 && idade <= 50){
            img.src = 'homem - unsplash.jpg'
        }

        else if(idade >= 50 && idade <= 110){
            img.src = 'idoso - unsplash.jpg'
        }

        else{
            alert("Verifique os dados e tente novante!")
        }
    }

    else{
        if(idade >= 0 && idade <= 14){
            img.src = 'menina - unsplash.jpg'
        }

        else if(idade >= 15 && idade <= 50){
            img.src = 'mulher - unsplash.jpg'
        }

        else if(idade >= 50 && idade <= 110){
            img.src = 'idosa - unsplash.jpg'
        }

        else{
            alert("Verifique os dados e tente novante!")
        }
    }
}