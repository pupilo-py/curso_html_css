function contar() {
    var inicio = window.document.querySelector("input#inicio").value
    var fim = window.document.querySelector("input#fim").value
    var passo = window.document.querySelector("input#passo").value
    var res = window.document.querySelector("div#res").children[0]

    if (inicio == "") {
        inicio = 1
        window.alert("Inicio inválido! Assumindo valor como 1.")
    }

    if (fim == "") {
        fim = 10
        window.alert("Fim inválido! Assumindo valor como 10.")
    }

    if (passo == null || passo == 0) {
        passo = 1
        window.alert("Passo inválido! Assumindo valor como 1.")
    }

    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    res.innerHTML = "Contando: <br/>"
    
    if (inicio < fim) {
        
        for (let c = inicio; c <= fim; c += passo) {
            if (c == fim) {
                res.innerHTML += `${c} &#x1F3C1;`
            } else {
                res.innerHTML += `${c} &#x1F449; `
            }
        }
    } else {
        for (let c = inicio; c >= fim; c -= passo) {
            if (c == fim) {
                res.innerHTML += `${c} &#x1F3C1;`
            } else {
                res.innerHTML += `${c} &#x1F449; `
            }
        }
    }
}