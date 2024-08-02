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
7.(opzionale) recupera il nome con input #fullName e lo inserisce in var
fullName
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
14. assegno ai campi del biglietto i risultati stampati in console
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
let kmTot; let age; let fullName;
const kmTotField = document.getElementById('kmTot');
const ageField = document.getElementById('age');
const fullNameField = document.getElementById('fullName');

document.querySelector('button.btn-success').addEventListener('click', function (e) {
  e.preventDefault();

  // 5. e .6
  kmTot = parseInt(kmTotField.value.trim());
  age = parseInt(ageField.value.trim());

  // 7.
  fullName = fullNameField.value.trim();

  // ripulisco i campi del form
  kmTotField.value = '';
  ageField.value = '';
  fullNameField.value = '';

  // mostro i dati recuperati
  console.log('kmTot', kmTot);
  console.log('age', age);
  console.log('fullName', fullName)

  // Fase di elaborazione dati
  // 8.
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
  if (ticketPrice = NaN) {    
    ticketPrice = ticketPrice.toFixed(2);
    console.log('ticketPrice', ticketPrice);
  } else {
    alert('No distance inserted');
  }
  // 12 e 13.
  if (discountAmount) console.log('discountAmount', discountAmount, 'discountType', discountType);

  // 14.
  document.querySelector('td.td-ticket-price').innerText = ticketPrice;
  document.querySelector('td.td-discount').innerText = discountType;
  document.querySelector('td.td-full-name').innerHTML = '<b>' + fullName + '</b>';
  if (ticketPrice && discountType && fullName) {
    document.querySelector('table').classList.remove('table-light');
    document.querySelector('table').classList.add('table-success');
  }
});


