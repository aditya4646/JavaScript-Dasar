// program jumlah angka
function jumlahAngka() {
    let jumlah = 0;
    for (let i = 0; i < arguments.length; i++) {
        jumlah += arguments[i];
    }
    return jumlah;
}

let hasil = jumlahAngka(2,34,1,34);
console.log(hasil);

// function faktorial (n){
//     if (n === 0) {
//         return 1;
//     }
//     return n * faktorial(n-1);
// }