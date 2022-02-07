function converter() {
    var c = Number(window.prompt("Digite uma temperatura em graus Celsius(°C):"))
    var k = c + 273.15
    var f = c * 1.8 + 32

    var res = window.document.querySelector("div#res")
    
    res.innerHTML = `<h2>A temperatura de ${c}°C, corresponde a...</h2>`
    res.innerHTML += `<p>${f}°F (Fahrenheit)</p>`
    res.innerHTML += `<p>${k}K (Kelvin)</p>`
}