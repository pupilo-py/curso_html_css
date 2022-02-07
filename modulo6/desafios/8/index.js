function calcularDesconto() {
    var produto = window.prompt("Qual o produto que você está comprando?")
    var preco = Number(window.prompt(`Qual é o preço do(a) ${produto}?`))
    var desconto = preco * 10 / 100
    
    var res = window.document.querySelector("div#res")

    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
    res.innerHTML += `<p>O preço original era R$${preco}.</p>`
    res.innerHTML += `Você acaba de ganhar R$${desconto} de desconto (-10%).</p>`
    res.innerHTML += `No fim, você vai pagar R$${preco - desconto} no produto ${produto}.</p>`
}