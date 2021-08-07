function kerjakanTugas(mataKuliah, selesai) {
    console.log(`mulai kerjekan tugas ${mataKuliah}`);

    selesai();
}

function selesai() {
    alert('selesai mengerjakan tugas');

}

kerjakanTugas('pemprograman Web', selesai);