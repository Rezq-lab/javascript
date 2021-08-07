// TODO FOR EACH tidak mengembalikan array
// var angka = [7, 5, 9, 1, 2, 3];
// var nama = ['joni', 'andika', 'abdul', 'somad'];
// angka.forEach(function (e) {

//     console.log(e);
// })
//? OR

// let cetak = function (e) {
//     console.log(e);
// }
// angka.forEach(cetak);

//? OR

// nama.forEach(function (e, i, x) {
//     console.log('member ke : ' + i + ' nama : ' + e);
// })

// TODO Map mengembalikan Array better than ForEach sehingga dapat join

// var angka = [2, 3, 5, 6, 7];

// var angka2 = angka.map(function (e) {
//     return e * 2;
// });

// console.log(angka2.join('-'));


// TODO sort mengurutkan

// var angka = [2, 3, 8, 5, 6, 7];
// // var angka2 = [2, 3, 8, 9, 10, 20, 5, 6, 7];

// angka.sort();

// console.log(angka);

// TODO OR FOR sort random big Number

// angka2.sort(function (a,b) {
//     return a-b;
// });

// console.log(angka2);


// TODO FILTER mencari dan  dapat mengembalikan banyak nilai

// var angka = [2,3,8,9,10,20,5,6,7];

// var angka2 = angka.filter(function(e){
// return e == 5;
//or
//     return e > 5;
// });

// console.log(angka2);


//FIND mengembalikan 1 nilai (not Array)
// var angka = [2,3,9,10,20,5,6,7];

// var angka2 = angka.find(function(e){
//     return e > 5 ;
// });

// console.log(angka2);