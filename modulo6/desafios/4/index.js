function calcularTroco() {
    var produto = window.prompt("Qual produto você está comprando?")
    var preco = Number(window.prompt(`Quanto custa o(a) ${produto} que você está comprando?`))
    var pagamento = Number(window.prompt("Quanto você desembolsou para pagar o produto?"))
    var troco = pagamento - preco
    window.alert(`Você comprou um(a) ${produto} que custou ${preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}.\nDeu ${pagamento.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}, em dinheiro e vai receber ${troco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} de troco.\nVolte Sempre!`)
}