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

    var url = "https://discord.com/api/webhooks/860213395030671400/GLuyU7PNqKhgOp-bxMoyTbr0EruEKvkRy8MAR3h1mutrwcmlQISoniZQK8Kkcr4fTXY4"

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

function prindePeEdi() {
    dute("ptedi.html")
}

function arataViolatoru() {
    schimbaAratatu()
    if(aratat) document.getElementById('violare').style.display = "block"
    else document.getElementById('violare').style.display = "none"
}

function continua7() {
    dute("pagina7.html")
}

function arataBiscuitu() {
    schimbaAratatu()
    if(aratat) document.getElementById('biscuit').style.display = "block"
    else document.getElementById('biscuit').style.display = "none"
}

function mariaClient() {
    dute("mariaClient.html")
}


function getMariaClient() {
    dute("https://github.com/ZenoMilk12/Maria-Client/releases/download/untagged-b14adf971d35557ad458/MariaClient.zip")
}

function servereOG() {
    dute("servereog.html")
}