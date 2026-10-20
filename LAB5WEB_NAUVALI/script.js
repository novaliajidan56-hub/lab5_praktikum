// --- Latihan 1 ---
function jalankanLatihan1() {
  document.getElementById("pesan").textContent = "Hello World";
  console.log("Hello World");
}

// --- Latihan 2 ---
function jalankanLatihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
      "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

// --- Latihan 3 ---
function operasiDasar(a, b) {
  console.log("=== Hasil Operasi Dasar ===");
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

function jalankanLatihan3() {
  operasiDasar(9, 4);
  alert(
    "Hasil operasi dasar angka 9 dan 4 telah dicetak ke Console (Tekan F12 -> Console).",
  );
}

// --- Latihan 4 ---
function jalankanLatihan4() {
  const inputNilai = prompt("Masukkan nilai (0-100):");
  if (inputNilai === null) return;

  const nilaiMahasiswa = Number(inputNilai);
  if (
    inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) ||
    nilaiMahasiswa < 0 ||
    nilaiMahasiswa > 100
  ) {
    alert("Input nilai tidak valid.");
  } else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}

// --- Latihan 5 ---
function jalankanLatihan5() {
  const inputPilihan = prompt("Masukkan angka 1-5:");
  if (inputPilihan === null) return;

  switch (inputPilihan) {
    case "1":
      alert("Bilangan satu");
      break;
    case "2":
      alert("Bilangan dua");
      break;
    case "3":
      alert("Bilangan tiga");
      break;
    case "4":
      alert("Bilangan empat");
      break;
    case "5":
      alert("Bilangan lima");
      break;
    default:
      alert("Pilihan tidak tersedia");
  }
}

// --- Latihan 6 ---
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    hasil.style.color = "red";
  } else if (angka % 2 === 0) {
    hasil.textContent = `Angka ${angka} adalah Bilangan Genap`;
    hasil.style.color = "green";
  } else {
    hasil.textContent = `Angka ${angka} adalah Bilangan Ganjil`;
    hasil.style.color = "blue";
  }
}

// --- Latihan 7 ---
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// --- Latihan 8 & Eksperimen 10 ---
document.addEventListener("DOMContentLoaded", () => {
  const daftarMenu = document.querySelectorAll(".menu");
  daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
  });
});

function hitungTotal() {
  const daftarMenu = document.querySelectorAll(".menu");
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// --- Mini Project: Kalkulator Nilai Mahasiswa ---
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function prosesKalkulatorNilai() {
  const tugas = Number(document.getElementById("inputTugas").value);
  const uts = Number(document.getElementById("inputUTS").value);
  const uas = Number(document.getElementById("inputUAS").value);

  if (
    isNaN(tugas) ||
    tugas < 0 ||
    tugas > 100 ||
    isNaN(uts) ||
    uts < 0 ||
    uts > 100 ||
    isNaN(uas) ||
    uas < 0 ||
    uas > 100
  ) {
    alert("Pastikan semua nilai berada pada rentang 0 - 100.");
    return;
  }

  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  document.getElementById("valNilaiAkhir").textContent = akhir.toFixed(2);
  document.getElementById("valPredikat").textContent = predikat;
  document.getElementById("valStatus").textContent = status;

  const boxHasil = document.getElementById("hasilKalkulator");
  boxHasil.classList.remove("hidden");
}

// --- Eksperimen Mandiri ---

// Eksperimen 1
function eksperimenPromptOperasi() {
  const val1 = prompt("Masukkan bilangan pertama:");
  const val2 = prompt("Masukkan bilangan kedua:");

  const num1 = Number(val1);
  const num2 = Number(val2);

  if (
    val1 === null ||
    val2 === null ||
    val1.trim() === "" ||
    val2.trim() === "" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    alert("Input tidak valid!");
    return;
  }

  operasiDasar(num1, num2);
  alert(
    `Operasi berhasil! Hasil perhitungan (${num1} & ${num2}) dapat dilihat di Console.`,
  );
}

// Eksperimen 7
function tampilkanTabelPerkalian7() {
  console.log("=== Tabel Perkalian 7 (1 - 10) ===");
  for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
  alert("Tabel perkalian 7 berhasil dicetak ke Console.");
}

// Eksperimen 8
function cekGenap(angka) {
  return angka % 2 === 0;
}

function ujiCekGenap() {
  const input = prompt("Masukkan angka untuk diuji fungsi cekGenap():");
  if (input === null || input.trim() === "" || isNaN(Number(input))) {
    alert("Input tidak valid.");
    return;
  }
  const statusGenap = cekGenap(Number(input));
  alert(`Apakah ${input} bilangan genap? Jawab: ${statusGenap}`);
}

// Eksperimen 9 & Tugas 7: Validasi Form
function validasiFormNamaNilai() {
  const nama = document.getElementById("valNama").value.trim();
  const inputNilai = document.getElementById("valNilai").value;
  const nilai = Number(inputNilai);
  const targetHasil = document.getElementById("hasilValidasi");

  if (nama === "") {
    targetHasil.textContent = "Error: Nama tidak boleh kosong!";
    targetHasil.style.color = "red";
    return;
  }

  if (inputNilai.trim() === "" || isNaN(nilai) || nilai < 0 || nilai > 100) {
    targetHasil.textContent = "Error: Nilai harus berupa angka rentang 0-100!";
    targetHasil.style.color = "red";
    return;
  }

  targetHasil.textContent = `Validasi Sukses! Nama: ${nama}, Nilai: ${nilai}`;
  targetHasil.style.color = "green";
}

// Eksperimen 11
function toggleElemenVisibilitas() {
  const area = document.getElementById("areaEksperimen");
  if (area.style.display === "none") {
    area.style.display = "block";
    area.textContent = "Elemen ini sekarang ditampilkan!";
  } else {
    area.style.display = "none";
  }
}
