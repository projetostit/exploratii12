let btnFiltrarResponsivo = document.querySelector(".btn-preferencia-resposivo")
let menuFiltrar = document.querySelector(".menu-lateral")

btnFiltrarResponsivo.addEventListener("click", (e) =>{
    e.preventDefault()
    menuFiltrar.style.display = 'flex'
})
let fecharMenuFiltros = document.querySelector(".fechar-link .fechar-menu")
fecharMenuFiltros.addEventListener("click", ()=>{
    menuFiltrar.style.display = ''
})

let labelsGostos = document.querySelectorAll(".label-preferencias input.preferencias");
let valorGosto;
let ultimaPreferenciaClicada = null;

let radiosKm = document.querySelectorAll(".radio")
let valorRadio

let btnPesquisarMapa = document.querySelector(".btn_pesquisar")

function atualizarEstadoSequencia() {
    radiosKm.forEach(radio => {
        radio.disabled = !valorGosto
    })

    if (btnPesquisarMapa) {
        btnPesquisarMapa.disabled = !(valorGosto && valorRadio)
    }
}

function atualizarMapa() {
    if (!valorGosto) {
        alert("Selecione uma preferência antes de pesquisar.")
        return
    }
    if (!valorRadio) {
        alert("Selecione a distância antes de pesquisar.")
        return
    }

    let mapa = document.querySelector(".mapa iframe")
    if (!mapa) return

    let inputPesquisa = document.querySelector(".input-pesquisa")
    let valorPesquisaLocal = inputPesquisa ? inputPesquisa.value.trim() : ""

    let termo = valorPesquisaLocal !== "" ? valorPesquisaLocal : valorGosto
    let termoFormatado = termo.replaceAll(" ", "+")

    mapa.src = `https://www.google.com/maps?q=${termoFormatado}&z=${valorRadio}&output=embed`
}

atualizarEstadoSequencia()

labelsGostos.forEach(radio => {
    radio.addEventListener("click", () => {
        if (ultimaPreferenciaClicada === radio) {
            radio.checked = false;
            valorGosto = undefined;
            ultimaPreferenciaClicada = null;
            valorRadio = undefined;
            radiosKm.forEach(r => r.checked = false);
        } else {
            valorGosto = radio.value;
            ultimaPreferenciaClicada = radio;
        }
        atualizarEstadoSequencia();
    })
})

radiosKm.forEach(radios =>{
    radios.addEventListener("click", ()=>{
        if (radios.disabled) return
        valorRadio = radios.value
        atualizarEstadoSequencia();
    })
})
