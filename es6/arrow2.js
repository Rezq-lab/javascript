/* const Mahasiswa = function () {

    this.nama = 'Sandiro';
    this.umur = 31;

    this.sayHello = function () {
        console.log(`Hallo nama saya ${this.nama} umur saya ${this.umur}`);
    }
}

const sandiro = new Mahasiswa(); */

// //?? const function
// const Mahasiswa = function () {

//     this.nama = 'Sandiro';
//     this.umur = 31;

//     this.sayHello = function () {
//         console.log(`Hallo nama saya ${this.nama} umur saya ${this.umur}`);
//     }
// }

// const sandiro = new Mahasiswa();


//?? object literal 

// const mhs = {
//     nama: 'doni',
//     umur: 32,

//     //?? arrow function tidak memiliki konsep this maka this akan berisikan nilai window
//     sayHallo: () => {
//         console.log(`hallo saya ${this.nama} umur saya ${this.umur}`);
//     }
// }

// const Mahasiswa = function () {

//     this.nama = 'Sandiro';
//     this.umur = 31;

//     this.sayHello = function () {
//         console.log(`Hallo nama saya ${this.nama} umur saya ${this.umur}`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }), 500
// }

// const sandiro = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    }
    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);

});