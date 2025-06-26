console.log("koneksi ke js berhasil");


// Fungsi Luas Segitiga
function hitungLuasSegitiga() {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;


    if (alas == "" || alas <= 0 || tinggi == "" || tinggi <= 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Input Tidak Valid',
            text: 'Semua sisi harus diisi dengan angka lebih dari 0!',
            confirmButtonText: 'Oke, saya paham 👍',
            background: '#fffbea',
            color: '#7a4f01'
        });
        return;
    }

    const luas = 0.5 * alas * tinggi;
    document.getElementById("hasil-luas").value = luas;
}

// Fungsi Keliling Segitiga
function hitungKelilingSegitiga() {
    const sisi1 = parseFloat(document.getElementById("sisi1").value);
    const sisi2 = parseFloat(document.getElementById("sisi2").value);
    const sisi3 = parseFloat(document.getElementById("sisi3").value);

    if (isNaN(sisi1) || sisi1 <= 0 || isNaN(sisi2) || sisi2 <= 0 || isNaN(sisi3) || sisi3 <= 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Input Tidak Valid',
            text: 'Semua sisi harus diisi dengan angka lebih dari 0!',
            confirmButtonText: 'Oke, saya paham 👍',
            background: '#fffbea',
            color: '#7a4f01'
        });
        return;
    }

    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("hasil-keliling").value = keliling;
}


// Fungsi untuk mereset form
function resetForm() {
    // Reset inputan luas segitiga
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasil-luas").value = "";

    // Reset inputan keliling segitiga
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("hasil-keliling").value = "";
}



// Ambil tombol
const btnLuas = document.getElementById("btnHitungLuas");
const btnKeliling = document.getElementById("btnHitungKeliling");
const btnReset = document.getElementById("btnReset");

// Event listener
btnLuas.addEventListener("click", hitungLuasSegitiga);
btnKeliling.addEventListener("click", hitungKelilingSegitiga);
btnReset.addEventListener("click", resetForm);

