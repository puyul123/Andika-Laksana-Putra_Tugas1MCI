// promise : 5 target hidup di 2023
const prompt = require("prompt-sync")(); //input pakai prompt-sync

console.log("Kepo resolusi Andika di 2023 ?")
let aku_siap = prompt("kalau kepo ketik 1, kalau engga ketik apa aja : ")

let resolusi = (time, _2023) => {
    return new Promise((resolve, reject) => {
        if (aku_siap == 1) {
            setTimeout(() => {
                resolve(_2023());
            }, time)
        } else {
            reject(console.log("Yaudah dapat dipahami"))
        } 
    })
}

resolusi(2000, () => console.log("1. Minimal survive sisop (setiap praktikum pasti gak tidur asli :)) dan dapet A hehe amin"))
    .then(() => {
        return resolusi(2000, () => console.log("2. Ikut kegiatan yang dibayar biar duit jajan banyak"));
    })
    .then(() => {
        return resolusi(2000, () => console.log("3. Bisa ikut riset atau projectan buat nambah pengalaman kerja dan memperluas ilmu (nyambung poin 2 ehe)"));
    })
    .then(() => {
        return resolusi(2000, () => console.log("4. Minimal nilai semua matkul semester 4 ini AB lah biar ip ga terjun payung lagi :("));
    })
    .then(() => {
        return resolusi(2000, () => console.log("5. Yang pasti keterima jadi admin MCI xixixi"));
    })
    .catch(() => {
        console.log("Semoga harimu menyenangkan");
    })
    .finally(() => {
        console.log("bye!");
    });