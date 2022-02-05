var numeros = []

function adicionarNumero() {
    var numero = window.document.querySelector("input#numero").value
    var log = window.document.querySelector("select#log")
    
    if (res.value != "") {
        limparAnalise()
    }

    if (!isValido(numero, numeros)) {
        window.alert("Número inválido! Digite um número no intervalo entre 1 e 100, sem repetições.")
    } else {
        numeros.push(Number(numero))
        log.innerHTML += `<option>Valor ${numero} adicionado</option>`
    }
}

function analisarNumeros() {
    var res = window.document.querySelector("div#res")
    var total = numeros.reduce((total, num) => total + num)

    Array.max = function(array) {
        return Math.max.apply(Math, array);
    };

    Array.min = function(array) {
        return Math.min.apply(Math, array);
    };

    if (res.value != "") {
        limparAnalise()
    }

    res.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor cadastrado foi ${Array.min(numeros)}.</p>`
    res.innerHTML += `<p>O maior valor cadastrado foi ${Array.max(numeros)}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${total}.</p>`
    res.innerHTML += `<p>A média dos valores cadastrados é ${total / numeros.length}.</p>`
}

function limparAnalise() {
    res.innerHTML = ""
}

function limparNumeros() {
    numeros = []
    log.innerHTML = ""
    limparAnalise()
}

function isValido(n, array) {
    if (n == "" || Number(n) < 1 || Number(n) > 100 || array.indexOf(Number(n)) != -1) {
        return false
    } else {
        return true
    }
}