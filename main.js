$(function(){
    //1. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà."
    // Oggetto Studente
    var studente = {
        'nome': 'Andrea',
        'cognome': 'Mazza',
        'età': 36
    }

    // Stampa a console il contenuto dell'oggetto.
    for (var key in studente) {
        var element = studente[key];    
        console.log(element);
        $('.'+ key)[0].innerHTML = element;
    }


    //2. "Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome", 
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

    var printList = confirm("Stampare a schermo nome, cognome ed età della lista degli studenti");
    
    if(printList){       
        listaNome = "";
        listaCognome ="";
        listaEta ="";
        i = 0;
        while(i < studenti.length){
            var studente = studenti[i];
            listaNome = `<p>${studente['nome']}</p>`;
            listaCognome = `<p>${studente['cognome']}</p>`;
            listaEta = `<p>${studente['eta']} anni</p>`;

            console.log(listaNome);
            $('#secondaParte > .row > .nome').append(listaNome);
            $('#secondaParte > .row > .cognome').append(listaCognome);
            $('#secondaParte > .row > .età').append(listaEta);
            i++
        }
    }
    
    //3. "Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età."
    var insertStudent = confirm("Desideri inserire un'altro studente?");
    if(insertStudent){
        var nome = prompt("Inserisci il NOME del nuovo studente");
        var cognome = prompt("Inserisci il COGNOME del nuovo studente");
        var eta = Number(prompt("Inserisci l'ETA' del nuovo studente"));
        var nuovoStudente = {'nome':nome, 'cognome':cognome, 'eta':eta};
        studenti.push(nuovoStudente);
        listaNome = `<p>${nuovoStudente['nome']}</p>`;
        listaCognome = `<p>${nuovoStudente['cognome']}</p>`;
        listaEta = `<p>${nuovoStudente['eta']} anni</p>`;      
        $('#secondaParte > .row > .nome').append(listaNome);
        $('#secondaParte > .row > .cognome').append(listaCognome);
        $('#secondaParte > .row > .età').append(listaEta);
    }
});




