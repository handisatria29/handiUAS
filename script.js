function prosesTransaksi(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const wisata = document.getElementById('wisata').value;
    const tanggal = document.getElementById('tanggal').value;

    console.log(`Transaksi: Nama: ${nama}, Email: ${email}, Wisata: ${wisata}, Tanggal: ${tanggal}`);
    alert('Transaksi berhasil!');
}
