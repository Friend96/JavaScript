var lista = []
var x = 0
var res = document.getElementById('resultado')
function clicou(){
    let numero = document.getElementById('num')
    let tab = document.getElementById('op')
    if(numero.value.length == 0 || numero.value > 100 || numero.value < 1 || lista.indexOf(parseFloat(numero.value)) != -1){
        alert('Valor invalido ou já encontrado na lista')
    }
    else{
        res.innerHTML = ""
        lista.push(parseFloat(numero.value))
        console.log(lista)

        let opção = document.createElement('option')
        opção.text = `Valor ${numero.value} adicionado`
        opção.value = `v${x}`
        x += 1
        tab.appendChild(opção)
    }
}

function finalizar(){
    if(lista.length > 1){
        lista.sort()
        res.innerHTML = ""

        res.innerHTML += `Ao todo temos ${lista.length} números cadastrados. <br><br>`

        res.innerHTML += `O maior valor informado foi ${lista[lista.length - 1]}. <br><br>`

        res.innerHTML += `O menor valor informado foi ${lista[0]}. <br><br>`

        let soma = 0
        for(let i = 0;i < parseInt(lista.length);i++){
            soma += lista[i]
        }
        res.innerHTML += `Somando todos valores temos ${soma}. <br><br>`

        res.innerHTML += `A média dos valores digitados é ${soma/parseFloat(lista.length)}`
    }
    else{
        alert('coloque mais de um valor')
    }
    
    
}
