function contar() {
    var numero = window.document.querySelector("input#numero").value
    var res = window.document.querySelector("div#res").children[0]

    if (numero == "") {
        window.alert("Número inválido! Assumindo valor como 1.")
        numero = 1
    }

    numero = Number(numero)

    res.innerHTML = ""

    for (let c = 1; c < 10; c++) {
        var item = window.document.createElement("option")
        item.text = `_0${c} x ${numero} = ${c * numero}`
        item.value = `valor ${c}`
        res.appendChild(item)
        
    }
    res.innerHTML += `<option value="valor ${10}">${10} x ${numero} = ${10 * numero}</option>`
}