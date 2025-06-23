document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen form luas
    const formLuas = document.querySelector(".form-luas");

    // Tambahkan event ketika tombol hitung diklik
    formLuas.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah reload form

        // Ambil nilai dari input alas dan tinggi
        const alas = parseFloat(document.getElementById("alas").value);
        const tinggi = parseFloat(document.getElementById("tinggi").value);

        // Validasi input
        if (isNaN(alas) || isNaN(tinggi)) {
            Swal.fire({
                icon: 'warning',
                title: 'Input Tidak Valid',
                text: 'Masukkan angka pada kolom Alas dan Tinggi dengan benar!',
                confirmButtonText: 'Oke, saya mengerti 👍',
                background: '#fffbea',
                color: '#7a4f01'
            });
            return;
        }



        // Hitung luas segitiga
        const luas = 0.5 * alas * tinggi;

        // Tampilkan hasil ke input readonly
        document.getElementById("hasil").value = luas.toFixed(2);
    });
});
