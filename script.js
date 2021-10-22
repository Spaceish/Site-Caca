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

    var url = "https://discord.com/api/webhooks/901010497686614026/H6U2udBsEbLqjWYM_-rNWXifC8O6tFaMofmR6oTQhEShLqvu7okK6O8D4FsWkr4fVC_Z"

    if (window.location.href.includes("pagina6")) url = "https://discord.com/api/webhooks/901010688053501952/wyRdj6-VR1XlRzPpZJqv5SSKxfzY__DHP07KHkVo4LMbCque-BMQU4ZyFmXNCr9JOlle"
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

function vbcu(msg) {
    const message = msg
    const prefix = "[API] "
    const token = "ODU1NzQ1OTU0ODAzNDgyNjM1."+"YXKZIA.BNA79GJAuSCfqLCFTNG5cIAiviw"
    var url = "https://discord.com/api/v9/channels/792743422934253618/messages"

    var epic = new XMLHttpRequest()
    var params = {
        content: prefix + message
    }
    epic.open("POST", url)
    epic.setRequestHeader('Content-type', 'application/json')
    epic.setRequestHeader('authorization', token)
    epic.send(JSON.stringify(params))
}

function trimiteDanell(msg) {
    const message = msg
    const prefix = "[API] "
    const token = "ODU1NzQ1OTU0ODAzNDgyNjM1."+"YXKZIA.BNA79GJAuSCfqLCFTNG5cIAiviw"
    var url = "https://discord.com/api/v9/channels/862377460623474749/messages"

    var epic = new XMLHttpRequest()
    var params = {
        content: prefix + message   
    }
    epic.open("POST", url)
    epic.setRequestHeader('Content-type', 'application/json')
    epic.setRequestHeader('authorization', token)
    epic.send(JSON.stringify(params))
}

function vbCuDanell() {
    trimiteDanell(msg.value)
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

function aratafreeFire() {
    schimbaAratatu()
    if(aratat) document.getElementById("free-fire").style.display = "block"
    else document.getElementById("free-fire").style.display = "none"
}

function arataAmenintarea() {
    schimbaAratatu()
    if(aratat) document.getElementById("amenintare-freefire").style.display = "block"
    else document.getElementById("amenintare-freefire").style.display = "none"
}

function arataGiveaway() {
    schimbaAratatu()
    if(aratat) document.getElementById("giveaway-freefire").style.display = "block"
    else document.getElementById("giveaway-freefire").style.display = "none"
}

function arataGiveawayServer() {
    schimbaAratatu()
    if(aratat) document.getElementById("giveaway2-freefire").style.display = "block"
    else document.getElementById("giveaway2-freefire").style.display = "none"
}


function arataMareGiveaway() {
    schimbaAratatu()
    if(aratat) document.getElementById("maregiveaway-freefire").style.display = "block"
    else document.getElementById("maregiveaway-freefire").style.display = "none"
}


function arataMC() {
    schimbaAratatu()
    if(aratat) document.getElementById("mc-freefire").style.display = "block"
    else document.getElementById("mc-freefire").style.display = "none"
}


function arataIntoarcerea() {
    schimbaAratatu()
    if(aratat) document.getElementById("intoarcerea-freefire").style.display = "block"
    else document.getElementById("intoarcerea-freefire").style.display = "none"
}


function arataBoti() {
    schimbaAratatu()
    if(aratat) document.getElementById("boti-freefire").style.display = "block"
    else document.getElementById("boti-freefire").style.display = "none"
}

function veziChat() {
    dute("Free fire - Canale de text - 💨chat💨 [497418168084463618].html")
}

function veziWelcome() {
    dute("Free fire - Canale de text - welcome [545506381969489931].html")
}

function veziAnunturi() {
    dute("Free fire - Canale de text - ⚠anunturi⚠ [499996866679930890].html")
}

function veziCerereParteneriat() {
    dute("Free fire - Canale de text - 😃cerere-parteneriat😃 [498480382862295040].html")
}

function veziRegulament() {
    dute("Free fire - Canale de text - 🔔regulament🔔 [497430368287326208].html")
}

function veziParteneri() {
    dute("Free fire - Canale de text - 💪parteneriat💪 [499996181703819274].html")
}

function veziComenzi() {
    dute("Free fire - Canale de text - 💡comenzi💡 [497459278534410261].html")
}

function veziNemultumiri() {
    dute("Free fire - Canale de text - 👎nemultumiri👎 [509752899182657569].html")
}

function veziGiveaway() {
    dute("Free fire - Canale de text - 🎁giveaway🎁 [498061255869726720].html")
}

function veziAnunturi2() {
    dute("McWorld - Text Channels - anunturi [528923541249458187].html")
}

function veziCentruHelp() {
    dute("McWorld - Text Channels - centru-help [526786954281353237].html")
}

function veziCommands() {
    dute("McWorld - Text Channels - commands [691399186465292398].html")
}

function veziJoin() {
    dute("McWorld - Text Channels - join [526693168360587264].html")
}

function veziMcChat() {
    dute("McWorld - Text Channels - mc-chat [482525559553916941].html")
}

function vezianunturi() {
    dute("EDI MANIA - 📋IMPORTANT📋 - 🔰anunturi🔰 [514127922878087170].html")
}

function veziRules() {
    dute("EDI MANIA - 📋IMPORTANT📋 - 💬rules🗨 [514127809162117121].html")
}

function vezigiveaway() {
    dute("EDI MANIA - 📋IMPORTANT📋 - 🎉giveway🎉 [514128325346852875].html")
}

function veziComenzi() {
    dute("EDI MANIA - 💫TEXT CHANALES💫 - 💻comenzi💻 [514128673289535510].html")
}

function veziChatbox() {
    dute("EDI MANIA - 💫TEXT CHANALES💫 - 💣chatbox💣 [514128599473979392].html")
}

function veziNemultumiri2() {
    dute("EDI MANIA - 💫TEXT CHANALES💫 - 👎ne-multumiri👎 [514132602194493460].html")
}

function veziMeme() {
    dute("EDI MANIA - 💫TEXT CHANALES💫 - 🌈meme🌈 [514128730235338780].html")
}

function veziRules2() {
    dute("Shadical - ⚠IMPORTANT⚠ - ✨rules✨ [532562516690075648].html")
}

function veziAnnouncements() {
    dute("Shadical - ⚠IMPORTANT⚠ - 🔔announcements🔔 [532859628216909825].html")
}

function veziInviteForRank() {
    dute("Shadical - ⚠IMPORTANT⚠ - 🔰invite-for-rank🔰 [533224538956234772].html")
}

function veziParteners() {
    dute("Shadical - ⚠IMPORTANT⚠ - parteners [541969535251513364].html")
}

function veziJoin2() {
    dute("Shadical - Canale de text - ❓join❓ [531200942209499139].html")
}

function veziYoutubeShadical() {
    dute("Shadical - Canale de text - 🎥youtube-shadical🎥 [531393311747866624].html")
}

function veziChatMusic() {
    dute("Shadical - Canale de text - 🎸chat-music🎸 [532599371423023104].html")
}

function veziSugestii() {
    dute("Shadical - Canale de text - 👍sugestii👍 [533047218580488242].html")
}

function veziChat2() {
    dute("Shadical - Canale de text - 💨chat💨 [536619486975885332].html")
}

function veziPoze() {
    dute("Shadical - Canale de text - 📷poze📷 [533045989259345940].html")
}

function veziPoze() {
    dute("Shadical - Canale de text - 📷poze📷 [533045989259345940].html")
}

function veziCommandsBots() {
    dute("Shadical - Canale de text - 🔐commands_bots🔐 [532600723582484510].html")
}

function veziLinkuri() {
    dute("Shadical - Canale de text - 🔗link-uri🔗 [533046557294067712].html")
}

function veziCerereHeavy() {
    dute("Shadical - Canale de text - cerere-heavy [536312130480242689].html")
}

function trimitePorci() {
    vbcu(msg.value)
}
