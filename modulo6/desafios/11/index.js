function verificarAnoBissexto() {
    var ano = Number(window.prompt("Qual ano você quer verificar?"))
    var bissexto = `<p>O ano de ${ano} <strong style="background-color: lightgreen;">É BISSEXTO</strong>&#x2705;</p>`
    var naoBissexto = `<p>O ano de ${ano} <strong style="background-color: lightcoral;">NÃO É BISSEXTO</strong>&#x274C;</p>`
    
    var res = window.document.querySelector("div#res")

    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`

    if (ano % 4 == 0) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) {
                res.innerHTML += bissexto
            } else {
                res.innerHTML += naoBissexto
            }
        } else {
            res.innerHTML += bissexto
        }
    } else {
        res.innerHTML += naoBissexto
    }
}