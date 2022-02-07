function verificarPreco() {
    var precoAnterior = Number(window.prompt("Qual o preço anterior do produto?"))
    var precoAtual = Number(window.prompt("Qual o preço atual do produto?"))
    var variacao = Math.abs(precoAnterior - precoAtual)
    var variacaoPorcentagem = variacao / (precoAnterior / 100)

    var res = window.document.querySelector("div#res")

    res.innerHTML = `<h2>Analisando os valores informados</h2>`

    res.innerHTML += `<p>O produto custava R$${precoAnterior} e agora custa R$${precoAtual}.</p>`

    if (precoAnterior > precoAtual) {
        res.innerHTML += `<p>O produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu R$${variacao} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacaoPorcentagem}% pra baixo.</p>`
    } else if (precoAnterior < precoAtual) {
        res.innerHTML += `<p>O produto está mais caro.</p>`
        res.innerHTML += `<p>O preço aumentou R$${variacao} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variacaoPorcentagem}% pra cima.</p>`
    } else {
        res.innerHTML += `<p>O produto não mudou de preço.</p>`
    }
}