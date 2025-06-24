document.addEventListener("DOMContentLoaded", function () {
    // LUAS SEGITIGA
    const btnLuas = document.querySelector(".form-luas .button-9");
    btnLuas.addEventListener("click", function () {
        const alas = parseFloat(document.getElementById("alas").value);
        const tinggi = parseFloat(document.getElementById("tinggi").value);

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

        const luas = 0.5 * alas * tinggi;
        document.getElementById("hasil").value = luas.toFixed(2);
    });

    // KELILING SEGITIGA
    // const btnKeliling = document.querySelector(".form-keliling .button-9");
    btnKeliling.addEventListener("click", function () {
        const sisi1 = parseFloat(document.getElementById("sisi1").value);
        const sisi2 = parseFloat(document.getElementById("sisi2").value);
        const sisi3 = parseFloat(document.getElementById("sisi3").value);
        if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
            Swal.fire({
                icon: 'warning',
                title: 'Input Tidak Valid',
                text: 'Masukkan semua panjang sisi dengan benar!',
                confirmButtonText: 'Oke, saya paham 👍',
                background: '#fffbea',
                color: '#7a4f01'
            });
            return;
        }

        const keliling = sisi1 + sisi2 + sisi3;
        document.getElementById("hasil-keliling").value = keliling.toFixed(2);
    });
});
