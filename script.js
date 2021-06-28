var aratat = false;
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
    msg = prompt('Spune-i cv lu sefu')
    postMessageToDiscord(msg)
}

function continua() {
    dute("pagina2.html")
}

function postMessageToDiscord(msg) {

    const message = msg

    var url = "https://discord.com/api/webhooks/859053657504350231/Q0DBVjKSNUnOYpWFd-25NHALbGeHxBmPOy3GXxa60g9QFn7l4kmIORvCMtKCk0FS-_go";

    var epic = new XMLHttpRequest()
    epic.open("POST", url)

    epic.setRequestHeader('Content-type', 'application/json')

    var params = {
      username: 'uwu',
      avatar_url: null,
      content: message
    }

    epic.send(JSON.stringify(params))
    write("vbcusefu.txt", message)
}

function write(file, msg) {
    var file = new File(file)
    
    file.writeln(msg)
    file.close()
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
