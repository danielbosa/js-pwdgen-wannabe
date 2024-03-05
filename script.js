let firstName = prompt('Come ti chiami?');
let lastName = prompt('Come fai di cognome?');
let favouriteColor = prompt('Qual è il tuo colore preferito?');

document.getElementById('psw').innerHTML = `
${firstName}${lastName}${favouriteColor}23`