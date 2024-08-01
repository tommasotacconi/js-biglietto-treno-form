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
7. recupera il nome con input #fullName e lo inserisce in const fullName
8. calcola il prezzo del biglietto ticketPrice moltiplicando kmTot
per costKm 
9. verifica se l'età è minore di 18, qualora lo sia calcola lo sconto
come ticketPrice * discountU18, lo assegna a const discountAmount e
lo sottrae a ticketPrice; sovrascrive poi con questo ultimo risultato
il valore di ticketPrice
10. verifica se l'età è maggiore di 65, qualora lo sia calcola lo sconto
come ticketPrice * discountO65, lo assegna a const discountAmount e
lo sottrae a ticketPrice; sovrascrive poi con questo ultimo risultato
il valore di ticketPrice
10. arrotonda a due cifre decimali la const ticketPrice
11. stampa in pagina il prezzo di ticketPrice
12. verifica se esiste una delle due tipologie di sconto, quindi
stampa il relativo sconto
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

 