function calcularTamanhoNome() {
    var nome = window.document.querySelector("input#nome").value
    var res = window.document.querySelector("div#res").children[0]

    res.innerHTML = `Seu nome é <strong>${nome}</strong>, possui ${nome.length} letras. São elas: `

    for (let c = 0; c < nome.length; c++) {
        const letra = nome[c];
        res.innerHTML += `<strong>${letra}</strong> `
    }
}