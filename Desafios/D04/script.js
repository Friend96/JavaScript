
function clicou(){
    var num = document.getElementById('num').value
    var tab = document.getElementById('tabuada')
    tab.innerHTML = " "
    if(num.length == 0){
        alert("[ERRO] insira algum número!")
    }

    else{
        var resultado = 0
        for(var x = 0;x <= 10;x++){
            resultado = parseInt(num) * x
            tab.innerHTML = tab.innerHTML + `${num}x${x}=${resultado}<br>`
        }
        tabuada.style.display = 'flex'
        tabuada.style.width = 'max-content'
    }
}