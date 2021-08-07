//TODO CLOSURE

//!! example 1
/* function init() {
    // let nama = 'aldian';

    function tampilNama(nama) {
        console.log(nama);
    }

    //TODO mengembalikan function tanpa menjalankan
    return tampilNama;
}

let panggilNama = init();
panggilNama('doni'); */

//!! example 2

/* function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Hallo ${nama} selamat ${waktu}...`);
    }
}

let salamPagi = ucapkanSalam('Pagi');
let salamSiang = ucapkanSalam('Siang');
let salamMalam = ucapkanSalam('Malam');

salamPagi('doni'); */

//!! example 3

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
}());



console.log(add());
console.log(add());
console.log(add());