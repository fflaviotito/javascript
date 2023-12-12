function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 5 && hora < 12) {
        img.src = 'imagens/manha.jpg'
        window.document.body.style.backgroundColor = '#FDE689'
    } else if (hora >=12 && hora  <= 18) {
        img.src = 'imagens/tarde.jpg'
        window.document.body.style.backgroundColor = '#499AD6'
    } else {
        img.src = 'imagens/noite.jpg'
        window.document.body.style.backgroundColor = '#2C3847'
    }
}