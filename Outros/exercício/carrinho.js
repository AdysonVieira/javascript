const parametros = new URLSearchParams(window.location.search);

function ativaItem(parametro) {
    const item = document.getElementById(parametro)
    if(item) {
        item.checked = true
    }
}

parametros.forEach(ativaItem);