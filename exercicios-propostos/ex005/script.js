var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.getElementById('res')

var dados = []

function adicionar() {
    if (num.value < 1 || num.value > 100) {
        alert('Número inválido')
    } else if (dados.indexOf(Number(num.value)) != -1) {
        alert('O número já consta na lista')
    } else {
        dados.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (dados.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        var total = dados.length
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados</p>`

        var maior = dados[0]
        var menor = dados[0]
        var soma = 0
        for (var pos in dados) {
            soma += dados[pos]
            if (dados[pos] > maior) {
                maior = dados[pos]
            }
            if (dados[pos] < menor) {
                menor = dados[pos]
            }
        }
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores informados é ${soma}</p>`

        var media = soma / total
        res.innerHTML += `<p>A média dos valores informados é ${media}</p>`
    }
}


