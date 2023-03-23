// callback function : 5 target hidup di 2023

const prompt = require("prompt-sync")(); //input pakai prompt-sync

console.log("Kepo resolusi Andika di 2023 ?")
let aku_siap = prompt("kalau kepo ketik 1, kalau engga ketik apa aja : ")

var target = () => {
    setTimeout(() => {
        console.log("1. Minimal survive sisop (setiap praktikum pasti gak tidur asli :)) dan dapet A hehe amin")
        setTimeout(() => {
            console.log("2. Ikut kegiatan yang dibayar biar duit jajan banyak")
            setTimeout(() => {
                console.log("3. Bisa ikut riset atau projectan buat nambah pengalaman kerja dan memperluas ilmu (nyambung poin 2 ehe)")
                setTimeout(() => {
                    console.log("4. Minimal nilai semua matkul semester 4 ini AB lah biar ip ga terjun payung lagi :(")
                    setTimeout(() => {
                        console.log("5. Yang pasti keterima jadi admin MCI xixixi")
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}

if (aku_siap == 1) target()
else console.log("Yaudah dapat dipahami, semoga berkah puasanya")