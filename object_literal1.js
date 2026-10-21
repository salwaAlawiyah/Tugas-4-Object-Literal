let studentsScore = [
    {
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    }
];

let nilaiTertinggi = studentsScore[0];

for (let siswa of studentsScore) {
    if (siswa.score > nilaiTertinggi.score) {
        nilaiTertinggi = siswa;
    }
}

console.log("Nama siswa dengan nilai tertinggi: " + nilaiTertinggi.name);
console.log("Nilai tertinggi: " + nilaiTertinggi.score);