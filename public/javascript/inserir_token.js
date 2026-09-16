const camposCodigo = document.querySelectorAll(".caixa-cod input");
const btnReenviarCodigo = document.querySelector(".reenviar-codigo");
const btnRefazerSenha = document.querySelector(".btn-preferencia");

camposCodigo.forEach((campo, indice) => {
    campo.addEventListener("input", () => {
        campo.value = campo.value.replace(/[^0-9]/g, "");

        if (campo.value !== "" && indice < camposCodigo.length - 1) {
            camposCodigo[indice + 1].focus();
        }
    });

    campo.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && campo.value === "" && indice > 0) {
            camposCodigo[indice - 1].focus();
        }
    });
});

btnReenviarCodigo.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Um novo código foi enviado para o seu e-mail.");
});

btnRefazerSenha.addEventListener("click", (event) => {
    event.preventDefault();

    let codigoCompleto = "";
    let tudoPreenchido = true;

    camposCodigo.forEach(campo => {
        if (campo.value.trim() === "") {
            campo.style.border = "1px solid red";
            tudoPreenchido = false;
        } else {
            campo.style.border = "";
            codigoCompleto += campo.value.trim();
        }
    });

    if (!tudoPreenchido) {
        alert("Preencha todos os dígitos do código.");
        return;
    }

    sessionStorage.setItem("codigoRecuperacao", codigoCompleto);
    window.location.href = "mudar-senha.html";
});
