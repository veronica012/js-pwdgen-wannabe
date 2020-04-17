//chiedere il nome
var nome_utente = prompt('Qual è il tuo nome?');
console.log(nome_utente);
document.getElementById('nome').innerHTML = nome_utente;

//chiedere il cognome
var cognome_utente = prompt('Qual è il tuo cognome?');
console.log(cognome_utente);
document.getElementById('cognome').innerHTML = cognome_utente;

//chiedere il colore preferito
var colore_preferito_utente = prompt('Qual è il tuo colore preferito?');
console.log(colore_preferito_utente);
document.getElementById('colore').innerHTML = colore_preferito_utente;
//visualizzare la password nomecognomecolorepreferito20
//document.writeln('La tua password è ' + nome_utente + cognome_utente + colore_preferito_utente);
document.getElementById('password').innerHTML = nome_utente + cognome_utente + colore_preferito_utente + 20;
