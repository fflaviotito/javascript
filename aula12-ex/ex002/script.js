function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nas = document.getElementById('ano-nas')
    if (ano_nas.value.length == 0 || ano_nas.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var idade = ano - ano_nas.value
        var sexo = document.getElementsByName('sexo')
        var gênero = ''
        if (sexo[0].checked) {
            gênero = 'Homem'
        } else {
            gênero = 'Mulher'
        }
        var msg = document.getElementById('msg')
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem') 
        switch (gênero) {
            case 'Homem':
                if (idade < 10) {
                    img.setAttribute('src', 'imagens/h-criança.jpg')
                } else if (idade < 21) {
                    img.setAttribute('src', 'imagens/h-adolecente.jpg')
                } else if (idade < 50) {
                    img.setAttribute('src', 'imagens/h-adulto.jpg')
                } else {
                    img.setAttribute('src', 'imagens/h-idoso.jpg')
                }
            break
            case 'Mulher':
                if (idade < 10) {
                    img.setAttribute('src', 'imagens/m-criança.jpg')
                } else if (idade < 21) {
                    img.setAttribute('src', 'imagens/m-adolecente.jpg')
                } else if (idade < 50) {
                    img.setAttribute('src', 'imagens/m-adulto.jpg')
                } else {
                    img.setAttribute('src', 'imagens/m-idosa.jpg')
                }
            break
        }
        if (idade >=0 && idade < 2) {
            img.setAttribute('src', 'imagens/bebe.jpg')
        }
        msg.innerHTML = `Detectamos um(a) ${gênero}, com ${idade} anos`
        msg.appendChild(img)
    }
    
    
    
}