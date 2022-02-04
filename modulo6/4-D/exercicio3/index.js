function verificarIdade() {
    var anoAtual = new Date().getFullYear()
    var anoNascimento = window.document.getElementById("ano")
    var idade = Number(anoAtual) - Number(anoNascimento.value)
    var sexo = window.document.getElementsByName("radsex")
    var genero
    var resultado = window.document.getElementById("res")

    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")

    } else {
        var img = window.document.createElement("img")
        img.setAttribute("id", "pessoa")
        
        if (sexo[0].checked) {
            genero = "HOMEM"
            
            if (idade < 12) {
                img.setAttribute("src", "images/homem-crianca.png")
                img.setAttribute("alt", "criança do sexo masculino")
            } else if (idade < 21) {
                img.setAttribute("src", "images/homem-jovem.png")
                img.setAttribute("alt", "jovem do sexo masculino")
            } else if (idade < 60) {
                img.setAttribute("src", "images/homem-adulto.png")
                img.setAttribute("alt", "adulto do sexo masculino")
            } else {
                img.setAttribute("src", "images/homem-idoso.png")
                img.setAttribute("alt", "idoso do sexo masculino")
            }
    
        } else {
            genero = "MULHER"

            if (idade < 12) {
                img.setAttribute("src", "images/mulher-crianca.png")
                img.setAttribute("alt", "criança do sexo masculino")
            } else if (idade < 21) {
                img.setAttribute("src", "images/mulher-jovem.png")
                img.setAttribute("alt", "jovem do sexo masculino")
            } else if (idade < 60) {
                img.setAttribute("src", "images/mulher-adulto.png")
                img.setAttribute("alt", "adulto do sexo masculino")
            } else {
                img.setAttribute("src", "images/mulher-idoso.png")
                img.setAttribute("alt", "idoso do sexo masculino")
            }
        }
    }

    resultado.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    resultado.appendChild(img)
}