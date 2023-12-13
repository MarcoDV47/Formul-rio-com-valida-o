const inputs = document.querySelectorAll("input, textarea");
const alertas = document.querySelectorAll("p.alerta");
const button = document.querySelector("button");

let i = 0;

button.addEventListener("click", function () {
    inputs.forEach(e => {
        if (e.value == "") {
            alertas[i].classList.add("mostrar");
            foiFalha(e);
        } else {
            alertas[i].classList.remove("mostrar");
            foiSucesso(e);
        }

        i++;

        if (i > alertas.length - 1) {
            i = 0;
        }
    });
});

foiSucesso = (e) => {
    e.classList.remove("falha");
    e.classList.add("sucesso");
}

foiFalha = (e) => {
    e.classList.remove("sucesso");
    e.classList.add("falha");
}


