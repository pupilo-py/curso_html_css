function verificarNota() {
    var aluno = window.prompt("Qual é o nome do aluno?")
    var nota1 = Number(window.prompt(`Primeira nota de ${aluno}:`))
    var nota2 = Number(window.prompt(`Segunda nota de ${aluno}:`))
    var media = (nota1 + nota2) / 2
    var reprovado = `<p>Com média abaixo de 3, o aluno está <strong style="background-color: lightcoral; color: red;">REPROVADO</strong></p>`
    var aprovado = `<p>Com média acima de 6, o aluno está <strong style="background-color: lightgreen; color: green;">APROVADO</strong></p>`
    var recuperacao = `<p>Com média entre 3 e 6, o aluno está em <strong style="background-color: lightgoldenrodyellow; color: yellow;">RECUPERAÇÃO</strong></p>`

    var res = window.document.querySelector("div#res")

    res.innerHTML = `<h2>Analisando a situação de ${aluno}</h2>`
    res.innerHTML += `<p>Com as notas ${nota1} e ${nota2} a <strong>média é ${media}</strong></p>`

    if (media < 3) {
        res.innerHTML += reprovado
    } else if (media > 6) {
        res.innerHTML += aprovado
    } else {
        res.innerHTML += recuperacao
    }
}