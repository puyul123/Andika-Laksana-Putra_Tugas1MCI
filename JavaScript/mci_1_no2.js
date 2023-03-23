var tambah = function (a, b) {
    return a + b
}

var bagi = function (a, b) {
    return a / b
}

var kurang = function (a, b) {
    return a - b
}

var kali = function (a, b) {
    return a * b
}

ans = kurang(tambah(bagi(4000, 2), 25), 2)
console.log(ans)