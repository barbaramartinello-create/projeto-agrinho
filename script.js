// ======================
// SIMULADOR CLIMÁTICO
// ======================

function analisarClima() {

    const clima = document.getElementById("clima").value;
    const resultado = document.getElementById("resultado");

    if (clima === "") {
        resultado.innerHTML = "⚠️ Selecione uma condição climática.";
        return;
    }

    if (clima === "sol") {
        resultado.innerHTML =
            "☀️ Clima ensolarado. Recomendação: irrigação moderada no início da manhã.";
    }

    if (clima === "nublado") {
        resultado.innerHTML =
            "☁️ Clima nublado. Recomendação: reduzir a irrigação e monitorar a umidade.";
    }

    if (clima === "chuva") {
        resultado.innerHTML =
            "🌧 Clima chuvoso. Recomendação: suspender a irrigação para evitar desperdício.";
    }

    resultado.style.marginTop = "20px";
    resultado.style.fontWeight = "bold";
}

// ======================
// CONTADORES DASHBOARD
// ======================

function animarContador(id, valorFinal, velocidade) {

    let contador = 0;

    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {

        contador += Math.ceil(valorFinal / 100);

        if (contador >= valorFinal) {
            contador = valorFinal;
            clearInterval(intervalo);
        }

        elemento.textContent = contador;

    }, velocidade);
}

window.addEventListener("load", () => {

    animarContador("agua", 5000, 30);
    animarContador("arvores", 320, 40);
    animarContador("co2", 1800, 25);

});

// ======================
// ROLAGEM SUAVE
// ======================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ======================
// ANIMAÇÃO DAS SEÇÕES
// ======================

const secoes = document.querySelectorAll(".secao");

function revelarSecoes() {

    secoes.forEach(secao => {

        const topo = secao.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (topo < alturaTela - 100) {

            secao.style.opacity = "1";
            secao.style.transform = "translateY(0)";

        }

    });

}

secoes.forEach(secao => {

    secao.style.opacity = "0";
    secao.style.transform = "translateY(40px)";
    secao.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revelarSecoes);
window.addEventListener("load", revelarSecoes);

// ======================
// BOAS-VINDAS
// ======================

window.addEventListener("load", () => {

    console.log("🌱 Campo Sustentável carregado com sucesso!");

});
