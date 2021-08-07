//TODO object literal
//?? need different variable for new object 
// let anggota = {
//     nama: 'andi',
//     energy: 10,
//     makan: function (porsi) {
//         this.energy += porsi;

//         console.log(`hallo ${this.nama}, kenyang gak? `)
//     }
// }
// let anggota2 = {
//     nama: 'joni',
//     energy: 10,
//     makan: function (porsi) {
//         this.energy += porsi;

//         console.log(`hallo ${this.nama}, kenyang gak? `)
//     }
// }
//TODO function declaration

//?? Alternate function declaration effective memmory split between object and fucntion
const methodeAnggota = {
    makan: function (porsi) {
        this.makan += porsi;
        console.log(`hallo ${this.nama}, kenyang gak? energy mu sekarang ${this.energy}`);
    },

    main: function (waktu) {
        this.energy -= waktu;
        console.log(`hallo ${this.nama}, sisa energy ${this.energy}`);
    },

    tidur: function (jam) {
        this.energy += jam * 2;
        console.log(`hallo ${this.nama}, sisa energy setelah tidur ${this.energy}`);
    }
}

//?? this function declaration 
function Anggota(nama, energy) {
    //?? Before
    //let anggota = {};

    //??After ( parent with object )
    let anggota = Object.create(methodeAnggota);

    anggota.nama = nama;
    anggota.energy = energy;

    //?? manual way for linked to object manajement without Object Create Function()
    // anggota.makan = methodeAnggota.makan;
    // anggota.main = methodeAnggota.main;
    // anggota.tidur = methodeAnggota.tidur;

    return anggota;

    //!! not effective memmory 
    //     anggota.makan = function (porsi) {
    //         this.energy += porsi;

    //         console.log(`hallo ${this.nama}, kenyang gak? energy mu sekarang ${this.energy}`);
    //     }
    //     anggota.main = function (waktu) {
    //         this.energy -= waktu;
    //         console.log(`hallo ${this.nama}, sisa energy ${this.energy}`);
    //     }

    //     return anggota;
}

let joni = Anggota('joni', 10);
let aldi = Anggota('aldi', 20);
//TODO -- END Function Declaration--



//TODO function constructor

// function Anggota(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function (porsi) {
//         this.energy += porsi;

//         console.log(`Hallo ${this.nama}, energy kamu setelah makan ${this.energy}`);
//     }

//     this.main = function (waktu) {
//         this.energy -= waktu;

//         console.log(`Hallo ${this.nama}, energy kamu setelah main ${this.energy}`);
//     }
// }
//Todo menggunakan new untuk instance objek
// let andi = new Anggota('andi', 10);