
function clicou(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')

    document.getElementById('res1').innerText = "Calculando:"

    var i = Number.parseInt(inicio.value)
    var res = document.getElementById('res2')

    res.innerText = " "

    if(passos.value == 0){
        passos.value = 1
    }

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        alert("[ERRO] tente novamente!")
    }

    else{
        if(inicio.value < fim.value){
            while(i <= parseInt(fim.value)){
                if(i > parseInt(fim.value)){
                    break
                }
    
                else{
                    res.innerText = res.innerText + i
                    res.innerText = res.innerText + '\u{1F449}'
                }
                i = i + parseInt(passos.value)
            }
        }
        else{
            while(i >= parseInt(fim.value)){
                if(i < parseInt(fim.value)){
                    break
                }
    
                else{
                    res.innerText = res.innerText + i
                    res.innerText = res.innerText + '\u{1F449}'
                }
                i = i - parseInt(passos.value)
            }
        }
        res.innerText = res.innerText + '\u{1F6A9}'
    }
}