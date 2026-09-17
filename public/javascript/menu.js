let hamburguer = document.querySelector(".hamburguer")
let menu = document.querySelector(".barra-lateral-header")

if (hamburguer) {
    hamburguer.addEventListener("click", () =>{
        menu.style.display = 'flex'
    })
}

let fechar = document.querySelector(".fechar-menu")
if (fechar) {
    fechar.addEventListener("click", () =>{
        menu.style.display = 'none'
    })
}

window.addEventListener("resize", ()=>{ 
    if (window.innerWidth > 685) {
        menu.style.display = "none";
    }
});

/* =========================================
   AUTENTICAÇÃO GLOBAL
========================================= */

const token = localStorage.getItem("token");

const botoesEntrar = document.querySelectorAll("#entrar");
const botoesCadastrar = document.querySelectorAll("#cadastrar");

function estaEmViews() {
    return window.location.pathname.includes("/views/");
}

function atualizarBotoesAuth() {
    if (token) {
        botoesEntrar.forEach(btn => btn.style.display = "none");
        botoesCadastrar.forEach(btn => btn.style.display = "none");

        // Adiciona botão de perfil em cada grupo de botões
        document.querySelectorAll("header .botoes_cadastro, .barra-lateral-header .botoes_cadastro").forEach(grupo => {
            if (!grupo.querySelector(".btn-perfil")) {
                const btnPerfil = document.createElement("a");
                btnPerfil.href = estaEmViews() ? "perfil.html" : "views/perfil.html";
                btnPerfil.className = "btn-perfil";
                btnPerfil.textContent = "Meu Perfil";
                grupo.appendChild(btnPerfil);
            }
        });
    } else {
        botoesEntrar.forEach(btn => btn.style.display = "block");
        botoesCadastrar.forEach(btn => btn.style.display = "block");

        document.querySelectorAll(".btn-perfil").forEach(btn => btn.remove());
    }
}

atualizarBotoesAuth();