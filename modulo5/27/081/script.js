document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("button#hamburger")

    hamburger.addEventListener("click", toggleMenu)
    window.addEventListener("resize", verifyWindowWidth)
    
    function toggleMenu() {
        hamburger.classList.toggle("open")
    }
    
    function verifyWindowWidth() {
        const width = window.innerWidth

        if (width >= 601 && hamburger.classList.contains("open")) {
            toggleMenu()
        }
    }
})