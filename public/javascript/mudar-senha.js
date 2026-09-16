const formMudarSenha = document.querySelector("form");
const btnConcluirTroca = document.getElementById("concluirTroca");

formMudarSenha.addEventListener("submit", function(event) {
    event.preventDefault();

    const senhaNova = document.getElementById("senha_nova");
    const confirmarSenhaNova = document.getElementById("confirmar_senha_nova");
    const inputs = [senhaNova, confirmarSenhaNova];
    let tudoPreenchido = true;

    inputs.forEach(input => {
        const barraInput = input.parentElement;

        if (input.value.trim() === "") {
            input.classList.add("placeholder-erro");
            barraInput.style.border = "1px solid red";
            tudoPreenchido = false;
        } else {
            input.classList.remove("placeholder-erro");
            barraInput.style.border = "1px solid #1A824D";
        }
    });

    if (!tudoPreenchido) {
        return;
    }

    if (senhaNova.value.length < 6) {
        senhaNova.classList.add("placeholder-erro");
        senhaNova.parentElement.style.border = "1px solid red";
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }

    if (senhaNova.value !== confirmarSenhaNova.value) {
        confirmarSenhaNova.classList.add("placeholder-erro");
        confirmarSenhaNova.parentElement.style.border = "1px solid red";
        alert("As senhas não coincidem.");
        return;
    }

    senhaNova.classList.remove("placeholder-erro");
    confirmarSenhaNova.classList.remove("placeholder-erro");
    senhaNova.parentElement.style.border = "1px solid #1A824D";
    confirmarSenhaNova.parentElement.style.border = "1px solid #1A824D";

    sessionStorage.removeItem("dadosCadastro");
    sessionStorage.removeItem("codigoRecuperacao");

    alert("Senha alterada com sucesso!");
    window.location.href = "login.html";
});
