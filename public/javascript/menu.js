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
