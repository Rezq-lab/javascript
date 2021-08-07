//TODO function expression

// //?? Basic
// const tampilNama = (nama) => {
//     return `halo, ${nama}`;
// }

// //?? implicit return single params

// const tampilNama = nama => `Hallo ${nama}`;

// //?? tanpa params

// const tampilNama = () => `hallo world`;
// console.log(tampilNama());

// //?? example 1
let mahasiswa = ['doni saputra', 'jonatan riva', 'suleman toni'];
// //?? without arrow function
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// //?? use arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);


let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf);