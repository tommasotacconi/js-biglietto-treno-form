console.log('JS OK')

/* 
Passaggi del codice
1. recupera i campi della tabella in cui inserire costo biglietto, tipo
di offerta applicata e nome passeggero
2. dichiara una const costKm
3. dichiara una const discountU18 con lo sconto
4. dichiara una const discountO65 con lo sconto
5. recupera i km dall'utente con l'input #kmTot e li inserisce in const
kmTot
6. recupera dall'utente con l'input #age l'età e la inserisce in const
age
7.(opzionale) recupera il nome con input #fullName e lo inserisce in const fullName
8. calcola il prezzo del biglietto ticketPrice moltiplicando kmTot
per costKm 
9. verifica se l'età è minore di 18, qualora lo sia calcola lo sconto
come ticketPrice * discountU18, lo assegna a var discountAmount e
lo sottrae a ticketPrice; sovrascrive poi con questo ultimo risultato
il valore di ticketPrice
10. verifica se l'età è maggiore di 65, qualora lo sia calcola lo sconto
come ticketPrice * discountO65, lo assegna a var discountAmount e
lo sottrae a ticketPrice; sovrascrive poi con questo ultimo risultato
il valore di ticketPrice
11. arrotonda a due cifre decimali la variabile ticketPrice
12. stampa in console o in pagina il prezzo di ticketPrice
13. verifica se esiste una delle due tipologie di sconto, quindi
stampa in console o in pagina il relativo sconto
*/

// Fase preparatoria
// 1.
const tdTicketCost = document.querySelector('.td-ticket-cost');
const tdDiscount = document.querySelector('.td-discount');
const tdFullName = document.querySelector('.td-full-name');
console.log('td per costo biglietto, tipo di offerta e nome completo', tdTicketCost, tdDiscount, tdFullName)
// 2.
const costKm = 0.21; //euro al km
console.log('costKm', costKm);
// 3.
const discountU18 = 0.2;
console.log('discountU18', discountU18);
// 4.
const discountO65 = 0.4;
console.log('discountO65', discountO65);

// Fase di recupero dati
/*  relizzo i punti 5. e 6. associando ad ogni click su button l'azione
 di importare nelle variabili kmTot e age i valori (attributo value) dentro
 ai due relativi campi del form
 */
let kmTot; let age;
const kmTotField = document.getElementById('kmTot');
const ageField = document.getElementById('age');

document.querySelector('button').addEventListener('click', function (e) {
  e.preventDefault();

  // 5. e .6
  kmTot = kmTotField.value.trim();
  age = ageField.value.trim();

  // ripulisco i campi del form
  kmTotField.value = '';
  ageField.value = '';

  // mostro i dati recuperati
  console.log('kmTot', kmTot);
  console.log('age', age);

  // Fase di elaborazione dati
  // .8
  let ticketPrice = kmTot * costKm;
  console.log('ticketPrice', ticketPrice);
  
  let discountType = 'Biglietto base'
  let discountAmount;
  // 9.
  if (age < 18) {  
    discountAmount = ticketPrice * discountU18;
    ticketPrice -= discountAmount;
    discountType = 'Biglietto minorenni';
  }
  // 10.
  else if (age > 65) {
    discountAmount = ticketPrice * discountO65;
    ticketPrice -= discountAmount;
    discountType = 'Biglietto sopra 65';
  }

  // Fase di restituzione dati
  // 11.
  ticketPrice.toFixed(2);
  console.log('ticketPrice', ticketPrice)
  // 12 e 13.
  if (discountAmount) console.log('discountAmount', discountAmount, 'discountType', discountType);

});


