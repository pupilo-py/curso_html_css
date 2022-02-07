function calcular() {
    var a = Number(window.prompt("Qual o valor de a?"))
    var b = Number(window.prompt("Qual o valor de b?"))
    var c = Number(window.prompt("Qual o valor de c?"))
    var delta = b ** 2 - 4 * a * c
    var x = [(-b + delta ** (1 / 2)) / 2 * a, (-b - delta ** (1 / 2)) / 2 * a]
    
    var res = window.document.querySelector("div#res")

    res.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> . 4 . ${a} . ${c} = ${delta}</strong></p>`
    res.innerHTML += `<p>As raízes da equação são <strong>x<sub>1</sub> = ${x[0]}</strong> e <strong>x<sub>2</sub> = ${x[1]}</strong>.</p>`
}