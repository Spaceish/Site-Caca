var aratat = false
const btn = document.getElementById('arata-sef')

function arataSefu() {
    schimbaAratatu()
    if(aratat) document.getElementById('sefu').style.display = "block"
    else document.getElementById('sefu').style.display = "none"
}

function schimbaAratatu() {
    aratat = !aratat
}

function arataCacatu() {
    schimbaAratatu()
    if(aratat) document.getElementById('caca').style.display = "block"
    else document.getElementById('caca').style.display = "none"
}

function arataTigaia() {
    schimbaAratatu()
    if(aratat) document.getElementById('tigaie').style.display = "block"
    else document.getElementById('tigaie').style.display = "none"
}

function vbCuSefu() {
    dute("pagina4.html")
}

function continua() {
    dute("pagina2.html")
}

function postMessageToDiscord(msg, nume) {

    const message = msg
    const name = nume

    var url = "https://discord.com/api/webhooks/859053657504350231/Q0DBVjKSNUnOYpWFd-25NHALbGeHxBmPOy3GXxa60g9QFn7l4kmIORvCMtKCk0FS-_go"

    if (window.location.href.includes("pagina6")) url = "https://discord.com/api/webhooks/859345309330571265/rDpd8Vw8M1E6k7dLfmMR5PoWOwyhF088UzeR1gwPyWfMMSIZ-pK0RHX44ETk69lZ4wwD"

    var epic = new XMLHttpRequest()
    epic.open("POST", url)

    epic.setRequestHeader('Content-type', 'application/json')

    var params = {
      username: nume,
      avatar_url: null,
      content: message
    }

    epic.send(JSON.stringify(params))
}

function veziVb() {
    dute("pagina3.html")
}

function dute(url) {
    window.location.href = url
}

function paginaUnu() {
    dute("index.html")
}

function trimite() {
    postMessageToDiscord(msg.value, nume.value)
}

function arataMaria() {
    schimbaAratatu()
    if(aratat) document.getElementById('maria').style.display = "block"
    else document.getElementById('maria').style.display = "none"
}

function laEdi() {
    dute("pagina5.html")
}

function vbCuEdi() {
    pagina6 = true
    dute("pagina6.html")
}

function trimiteEdi() {
    postMessageToDiscord(msg.value, nume.value)
}

function arataFata() {
    schimbaAratatu()
    if(aratat) document.getElementById('fata').style.display = "block"
    else document.getElementById('fata').style.display = "none"
}

function arataEdiTigan() {
    schimbaAratatu()
    if(aratat) document.getElementById('edi-tigan').style.display = "block"
    else document.getElementById('edi-tigan').style.display = "none"
}