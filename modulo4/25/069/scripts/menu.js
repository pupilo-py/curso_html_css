function clickMenu() {
    menu = window.document.querySelector("menu");
    
    if (menu.style.display == "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}