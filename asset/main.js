function CekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
   
    if (nama === '') {
        alert('Jangan kosongkan nama 😘');
    } else {
        let status = [
            'isi',
            'kosong'
        ];
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                {
                    nama: 'Beruk Hitam',
                    deskripsi: 'Monyet berwarna hitam, mungkin mengacu pada sesuatu yang kuat dan lincah.'
                },
                {
                    nama: 'Beruk Hitam',
                    deskripsi: 'Monyet berwarna hitam, mungkin mengacu pada sesuatu yang kuat dan lincah.'
                },
                {
                    nama: 'Dukun Kece',
                    deskripsi: 'Kamu memiliki keahlian spiritual yang menonjol dan daya tarik yang kuat, seperti dukun yang tidak hanya pandai dalam ilmu gaib tetapi juga menarik perhatian dengan penampilan yang menawan.'
                },
                {
                    nama: 'Kucing Guling',
                    deskripsi: 'Menyenangkan dan penuh keceriaan, seperti kucing yang suka berguling-guling menunjukkan sifat kelembutan dan keceriaan dalam setiap langkahnya.'
                },
                {
                    nama: 'Koala ngesot',
                    deskripsi: 'kamu seorang yangrajin dalam menjalani hidup meskipun tidak ada tujuan.'
                },
                
                {
                    nama: 'Siput Kayang',
                    deskripsi: 'ketekunan dan kecepatan, seperti siput yang selalu bergerak meski lambat.'
                },
                {
                    nama: 'Raja Kacang',
                    deskripsi: 'Kecil tetapi memiliki kekuatan besar, seperti raja yang memimpin semua kacang-kacangan dengan bijaksana.'
                },
                {
                    nama: 'Jin Pelupa',
                    deskripsi: 'Kadang-kadang lupa tetapi memiliki kekuatan spiritual yang besar, seperti jin yang kuat tetapi tidak selalu ingat akan kekuatannya.'
                },     
                {
                    nama: 'Buaya Ngesot',
                    deskripsi: 'menggambarkan kecerdikan dan kejutan, sebagaimana gerakan buaya yang tak terduga.'
                } ,     
                {
                    nama: 'Kura-Kura Sad Boy',
                    deskripsi: 'kamu pendek sesuai dengan umurmu.'
                }      
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random].nama}: ${khodam[random].deskripsi})`);
            $('#search').val('');
        } else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function() {
    $('#btn-search').click(CekKhodam);
});
