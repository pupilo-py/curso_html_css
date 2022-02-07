function converter() {
    var m = Number(window.prompt("Digite uma distância em metros(m):"))
    var km = String(m / 1000).replace(".", ",")
    var hm = String(m / 100).replace(".", ",")
    var dam = String(m / 10).replace(".", ",")
    var dm = String(m * 10).replace(".", ",")
    var cm = String(m * 100).replace(".", ",")
    var mm = String(m * 1000).replace(".", ",")
    m = String(m).replace(".", ",")

    var res = window.document.querySelector("div#res")
    
    res.innerHTML = `<h2>A distância de ${m} metros, corresponde a...</h2>`
    res.innerHTML += `<p>${km} quilometros (Km)<p>`
    res.innerHTML += `<p>${hm} hectometros (Hm)<p>`
    res.innerHTML += `<p>${dam} decametros (Dam)<p>`
    res.innerHTML += `<p>${m} metros (m)<p>`
    res.innerHTML += `<p>${dm} decímetros (dm)<p>`
    res.innerHTML += `<p>${cm} centímetros (cm)<p>`
    res.innerHTML += `<p>${mm} milímetros (mm)<p>`
}