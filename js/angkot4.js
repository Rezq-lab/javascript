var nilaiAwal = 1;
var angkotBeroperasi = 6;
var jumlah = 10;





for (var nilaiAwal; nilaiAwal <= jumlah; nilaiAwal++) {

    if (nilaiAwal <=angkotBeroperasi) {
            console.log('Angkot No ' +' '+ nilaiAwal + ' Beroperasi')
    }else if (nilaiAwal === 8 ) {
        console.log('Angkot No ' +' '+ nilaiAwal + ' Sedang Lembur')
    } else {
         console.log('Angkot No ' +' '+ nilaiAwal + ' Tidak Beroperasi')
    }
    
}

