const prompt = require("prompt-sync")(); //input pakai prompt-sync

console.log("Kepo resolusi Andika di 2023 ?")
let aku_siap = prompt("kalau kepo ketik 1, kalau engga ketik apa aja : ")

function time(ms) {
    return new Promise((resolve, reject) => {
        if (aku_siap == 1) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log("Yaudah dapat dipahami"))
        }
    })
}

async function resolusi() {
    try {
        await time(2000)
        console.log("1. Minimal survive sisop (setiap praktikum pasti gak tidur asli :)) dan dapet A hehe amin")

        await time(2000)
        console.log("2. Ikut kegiatan yang dibayar biar duit jajan banyak")

        await time(2000)
        console.log("3. Bisa ikut riset atau projectan buat nambah pengalaman kerja dan memperluas ilmu (nyambung poin 2 ehe)")

        await time(2000)
        console.log("4. Minimal nilai semua matkul semester 4 ini AB lah biar ip ga terjun payung lagi :(")

        await time(2000)
        console.log("5. Yang pasti keterima jadi admin MCI xixixi")
    }
    catch (error) {
        console.log("Semoga harimu menyenangkan");
    }
}

resolusi()