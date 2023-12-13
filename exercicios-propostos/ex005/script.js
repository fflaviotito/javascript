function adicionar() {
    var num = document.getElementById('num').value
    if (num < 1 || num > 100) {
        alert('Número inválido!')
    } else {
        var lista = document.getElementById('lista')
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
    }
}

