function Mahasiswa(nama, energy) {

    this.nama = nama;
    this.energy = energy;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energy += porsi;

    return `halo ${this.nama} , energi anda setelah makan ${this.energy}`;
}

Mahasiswa.prototype.main = function (jam) {
    this.energy -= jam;

    return `Halo ${this.nama} selamat bermain `;
}

Mahasiswa.prototype.tidur = function (jam) {
    this.energy += jam * 2;

    return `halo ${this.nama} setelah tidur enery anda menjadi ${this.energy}`;
}

let joni = new Mahasiswa('joni', 10);