function reajustarSalario() {
    var nome = window.prompt("Qual o nome do funcionário?")
    var salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    var porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var reajuste = salario * porcentagem / 100

    var res = window.document.querySelector("div#res")

    res.innerHTML = `<h2>${nome} recebeu um aumento de salárial!</h2>`
    res.innerHTML += `<p>O salário atual é R$${salario}.</p>`
    res.innerHTML += `<p>Com um aumento  R$${porcentagem}%, o salário vai aumentar R$${reajuste} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$${salario + reajuste}.</p>`
}