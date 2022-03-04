console.log('JS Ok')

// Chiedo età all'utente
const age = prompt('Quanti anni hai?');
console.log('La mia età è ' + age);

// Chiedo all'utente quanti km deve percorrere
const km = prompt('Quanti km devi percorrere?');
console.log('I Kilometri che devo pecorrere sono ' + km);


// Costo 0.21€ al km
const euroKM = 0.21

const tot = km*euroKM
// console.log('Il costo del tuo biglietto è ' + tot);



// Costo se il passeggero è < 18 20% di sconto

/*if (age < 18) {
    console.log('è minorenne');

} 
else{
    console.log('è maggiorenne');
}*/


// lo sconto dl 20% < 18
let varTry = ((tot*20) / 100);
let varSconto = (tot - varTry);
//console.log('Il costo del tuo biglietto con lo sconto minorenni è di €' + (varSconto .toFixed(2)));


if(age < 18) {
    let varTry = ((tot*20) / 100);
    let varSconto = (tot - varTry);
    console.log('Il costo del tuo biglietto con lo sconto minorenni è di €' + (varSconto .toFixed(2)));
}  else {
    console.log('Il costo del tuo biglietto è di €' + tot)
}


// lo sconto del 40% > 65
varTry = ((tot*45) / 100);
varSconto = (tot - varTry);
//console.log('Il costo del tuo biglietto con lo sconto over 65 è di €' + (varSconto .toFixed(2)));


if(age > 65) {
    let varTry = ((tot*45) / 100);
    let varSconto = (tot - varTry);
    console.log('Il costo del tuo biglietto con lo sconto over 65 è di €' + (varSconto .toFixed(2)));
} 





/*if (age < 18) {
    console.log(euroKmSconto)
}*/