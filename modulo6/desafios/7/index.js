function converter() {
    var real = Number(window.prompt("Digite um valor em reais(R$):"))
    var cotacao = Number(window.prompt("Digite o valor da cotação do dolar(US$) hoje:"))
    var dolar = real * cotacao

    var res = window.document.querySelector("div#res")
    
    res.innerHTML = `<p>Com a cotação à ${cotacao} reais, R$${real} vale(m) US$${dolar}</p>`
}