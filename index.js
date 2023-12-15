const inputs = document.querySelectorAll("input, textarea");
const alertas = document.querySelectorAll("p.alerta");
const button = document.querySelector("button");

let inputsPreenchidos = []

button.addEventListener("click", function () {
    inputs.forEach((e, i) => {
        if (e.value == "") {
            alertas[i].classList.add("mostrar");
            foiFalha(e);
        } else {
            alertas[i].classList.remove("mostrar");
            foiSucesso(e);
            inputsPreenchidos.push(e);
        }
        podeAprovar();
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

const podeAprovar = () => {
    if (inputsPreenchidos.length < inputs.length) {
        return false
    } else if (inputsPreenchidos.length == inputs.length) {
        return true;
    }
}