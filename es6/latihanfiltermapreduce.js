//ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));



//pilih dengan judul durasi lanjutan

let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


    //ambil durasi masing masing video
    .map(item => item.dataset.duration)
    //ubah durasi menjadi ke float, ubah menit menjadi detik

    .map(waktu => {
        //10:30 => 10,30

        const parts = waktu.split(':').map(part => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })
    //jumlahkan semua detik

    .reduce((total, detik) => total + detik)

//ubah format ke jam menit detik

const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

//simpan di dom

//?? tampilkan total durasi video
const pdurasi = document.querySelector('.total-durasi');
pdurasi.textContent = `${jam}, jam ${menit} menit ${detik} detik`;
//?? tampilkan jumlah video di dom
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`