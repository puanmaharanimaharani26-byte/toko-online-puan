// 1. Menghitung jumlah keranjang
let jumlah = 0;

function tambahKeranjang(namaProduk) {
    jumlah++;

    document.getElementById("jumlah").innerText = jumlah;

    alert(namaProduk + "berhasil ditambahkan ke keranjang!");
}

// 2. Mengubah tema terang dan gelap
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkMode.innerText ="🌞";
    } else {
        darkMode.innerText ="🌙";
    }
});

// 3. Validasi formulir kontak
const from = document.getElementById("formKontak");

from.addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let.email =
document.getElementById("email").value;
    let pesan =
document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua kolom harus diisi!");
    } else {
        alert("Terima kasih " + nama +", pesan berhasil dikirim!");
        from.reset();
    }
});