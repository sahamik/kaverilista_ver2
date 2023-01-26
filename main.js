
// Toiminto joka tallentaa käyttäjän syöttämät nimet taulukkoon ja tulostaa lopulta kaverilistan

var kaveriLista = [];

function lisaaKaveri() {
    var nimi = document.getElementById("nimi").value;
    kaveriLista.push(nimi);

    var lista = "";
    
    for (var i = 0; i < kaveriLista.length; i++) {
        lista = lista + (i+1) + ". " + kaveriLista[i] + "<br>"

        if (kaveriLista.length > 10) {
            break;
        }
        document.getElementById("kaverilista").innerHTML = lista;
    } 
}

// Toiminto joka poistaa kaverin nimen listalta

function poistaKaveri() {
    var nimi = document.getElementById("nimi").value;
    var index = kaveriLista.indexOf(nimi);

    var lista = "";
    
    for (var i = 0; i < kaveriLista.length; i++) {
        lista = lista + (i+1) + ". " + kaveriLista[i] + "<br>"
    }
    
    if (index !== -1) {
        kaveriLista.splice(index, 1);
        
    }
    document.getElementById("kaverilista").innerHTML = lista;
}

// Toiminto joka järjestää kavereiden nimet listalla

function jarjestaKaverit() {

    var lista = "";
    
    for (var i = 0; i < kaveriLista.length; i++) {
        lista = lista + (i+1) + ". " + kaveriLista[i] + "<br>"
    }
    kaveriLista.sort();
    document.getElementById("kaverilista").innerHTML = lista;
}
