//Creao un array con gli ingredienti
const lista_spesa = ['Guanciale', 'Pecorino', 'Uova', 'Pasta', 'Pepe nero']

// recupero l'elemneto che deve contenere i valori dell'array
const ul = document.getElementById('lista-spesa')

// ciclo l'array con il while
let i = 0;

while (i < lista_spesa.length) {
    //creao un nuovo list item
    const li = document.createElement('li');

    //inserisco il testo all'interno
    li.innerText = lista_spesa[i];

    //aggiungo il list item alla lista
    ul.append(li);

    //istruzione che porta il ciclo al termine: incrementando di 1 di i
    i++;
}