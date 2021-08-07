const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//TODO find 

/* 
const newAngka = [];
for (let i = 0; i <= angka.length; i++) {



    if (angka[i] >= 3) {

        newAngka.push(angka[i]);

    }

} */
//TODO filter 

/* const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);
 */

//TODO MAP
/* 
const newAngka = angka.map(a => a * 2);
console.log(angka);
console.log(newAngka); */

//TODO REDUCE
/* const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(newAngka); */

//TODO chainging methode
// find angka > 5
// kalikan 3
// jumlah


const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, currV) => acc + currV);

console.log(hasil);