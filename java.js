let primerClick = true;

function celebrar() {
    if (primerClick) {
        document.getElementById("pagina").classList.add("fondo");
        document.getElementById("mensaje").classList.add("mostrar");
        document.getElementById("btn").innerText = "Apretar muchas veces........ muuuuuuchas :)";
        primerClick = false;
    }

    crearExplosion();
}

function crearExplosion() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    const cantidad = ancho < 600 ? 12 : 20; // menos partículas en celular

    for (let i = 0; i < cantidad; i++) {
        const particula = document.createElement("div");
        particula.className = "particula";

        particula.style.left = x + "px";
        particula.style.top = y + "px";

        const angulo = Math.random() * 2 * Math.PI;
        const distancia = Math.random() * (ancho < 600 ? 80 : 120);

        particula.style.setProperty("--x", Math.cos(angulo) * distancia + "px");
        particula.style.setProperty("--y", Math.sin(angulo) * distancia + "px");

        document.body.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 1000);
    }
}