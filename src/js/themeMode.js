const toggleContainer = document.querySelector(".calculadora__toggle")
let darkMode = true

export const cambioColores = () => {
    const toggleMovimiento = document.querySelector(".calculadora__toggle--button")
    toggleMovimiento.classList.toggle("moviminento-toggle")

    const root = document.documentElement
    darkMode = !darkMode
    if(darkMode) {
        root.style.setProperty("--background-1", "#1e1e1e")
        root.style.setProperty("--background-2", "#404040")
        root.style.setProperty("--background-3", "#464646")
        root.style.setProperty("--background-4", "#5e5e5e")
        root.style.setProperty("--background-5", "#dda142")
        root.style.setProperty("--color", "#d0d0d0")

    } else {
        root.style.setProperty("--background-1", "#a2dada")
        root.style.setProperty("--background-2", "#355ebb")
        root.style.setProperty("--background-3", "#b49fd9")
        root.style.setProperty("--background-4", "#85e6e8")
        root.style.setProperty("--background-5", "#d879b8")
        root.style.setProperty("--color", "#1b1010")
    }
}

toggleContainer.addEventListener("click", cambioColores)