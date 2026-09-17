let hamburguer = document.querySelector(".hamburguer");
let menu = document.querySelector(".barra-lateral-header");

if (hamburguer) {
    hamburguer.addEventListener("click", () => {
        menu.style.display = "flex";
    });
}

let fechar = document.querySelector(".fechar-menu");

if (fechar) {
    fechar.addEventListener("click", () => {
        menu.style.display = "none";
    });
}


function atualizarMenu() {

    const token = localStorage.getItem("token");

    const botoesEntrar =
        document.querySelectorAll("#entrar");

    const botoesCadastrar =
        document.querySelectorAll("#cadastrar");

    const botoesPerfil =
        document.querySelectorAll("#meu-perfil");

    botoesEntrar.forEach(botao => {
        botao.style.display = token ? "none" : "block";
    });

    botoesCadastrar.forEach(botao => {
        botao.style.display = token ? "none" : "block";
    });

    botoesPerfil.forEach(botao => {
        botao.style.display = token ? "block" : "none";
    });
}

atualizarMenu();


window.addEventListener("resize", () => {

    if (window.innerWidth > 685) {
        menu.style.display = "none";
    }

});