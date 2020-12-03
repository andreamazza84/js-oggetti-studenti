var esercizio = {
    repo : "js-oggetti-studenti",
    istruzioni: ["Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.", 

"Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome", 

"Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età." ],
    augurio: "che la forza degli oggetti sia con voi :muscle:"
}


//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà."
var d = new Date();
var y = d.getFullYear();

// Oggetto Studente
var studente = {
    'nome': 'Andrea',
    'cognome': 'Mazza',
    'eta': function () {
        return (y - 1984);
    },
    'filmPreferiti': ['Il Grande Lebowski', 'The Wolf Of Wallstreet'],
    'strumenti': 'batteria',
    'sport': 'arrampicata',
    'lavoro': 'studente'
}

// Stampa a console il contenuto dell'oggetto.
for (var key in studente) {
    var element = studente[key];    
    console.log(element);
}
console.log(studente.eta());

//"Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome", 

var studenti = [
    {
        'nome': 'Andrea',
        'cognome': 'Mazza',
        'eta': 36   
        },
    {
        'nome': 'Luca',
        'cognome': 'Marconi',
        'eta': 26   
        },
    {
        'nome': 'Andrea',
        'cognome': 'Diprè',
        'eta': 45   
        },
    {
        'nome': 'Giacomo',
        'cognome': 'Melchiorri',
        'eta': 30   
        },    
    {
        'nome': 'Mirco',
        'cognome': 'Matteucci',
        'eta': 29   
        }
];

for(var i = 0; i < studenti.length; i++){
    var studente = studenti[i];
    console.log("Nome: " + studente['nome']);
    console.log("Cognome: " + studente['cognome']);
}
