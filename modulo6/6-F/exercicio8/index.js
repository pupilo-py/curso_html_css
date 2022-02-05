var clientes = []

function adicionarCliente() {
    var cliente = window.document.querySelector("input#cliente").value
    var log = window.document.querySelector("select#log")
    
    if (res.value != "") {
        limparAnalise()
    }

    clientes.push(Number(cliente))
    log.innerHTML += `<option>${cliente}</option>`
}

function analisarClientes() {
    var res = window.document.querySelector("div#res")

    res.innerHTML += `<p>Ao todo, temos ${clientes.length} clientes cadastrados.</p>`
}

function limparAnalise() {
    res.innerHTML = ""
}

function limparClientes() {
    clientes = []
    log.innerHTML = ""
    limparAnalise()
}