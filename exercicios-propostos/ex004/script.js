function gerar() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    seltab.style.display = "block"
    var numero = Number(num.value)
    tab.innerHTML = ''
    for (var c = 1; c <= 9; c++) {
        var item = document.createElement('option')
        item.text = `${numero} x ${c} = ${numero*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}

function limpar_tab() {
    var tab = document.getElementById('seltab')
    seltab.style.display = "none"
}