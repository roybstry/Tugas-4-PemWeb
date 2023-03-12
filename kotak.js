// Mencari semua elemen dengan kelas "box"
const boxes = document.querySelectorAll(".box");

// Menambahkan event listener untuk setiap kotak
boxes.forEach(box => {
    box.addEventListener("dblclick", () => {
        // Mengubah warna latar belakang kotak menjadi warna acak
        box.style.backgroundColor = getRandomColor();
    });
});

// Fungsi untuk menghasilkan warna acak
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}