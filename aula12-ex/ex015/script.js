function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nas = document.getElementById('ano-nas')
    if (ano_nas.value.length == 0 || ano_nas.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - ano_nas.value
        var gênero = 
    }
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    
    
}