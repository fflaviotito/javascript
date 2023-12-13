var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')

var dados = [4]
dados.push(num)

function adicionar() {
    if (num.value < 1 || num.value > 100) {
        alert('Número inválido')
    } else if (dados.indexOf(num.value) != -1) {
        alert('O número já consta na lista')
    } else {
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }
}


