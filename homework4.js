//soal 1 : 
//Membuat array kosong untuk menyimpan nilai acak

let randomNumbers = [];

// Menambahkan 100 nilai acak (1 sampai 50) ke array

for (let i = 0; i < 100; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}
console.log(randomNumbers);
console.log("=====================================================================");

// Soal 2 : Untuk memecah array menjadi dua array berdasarkan indexnya, saya menggunakan loop for 
// dan kondisional if.
// Berikut ini adalah contohnya:
let even_list = [];
let odd_list = [];
for (let i = 0; i < randomNumbers.length; i++) {
    if (i % 2 === 0) {
        even_list.push(randomNumbers[i]);
    } else {
        odd_list.push(randomNumbers[i]);
    }
}
console.log(even_list);
console.log(odd_list);
console.log("=====================================================================");
// nomor 3
// fungsi max nya
function max(input) {
    let max = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i];
        }
    }
    return max;

}
// fungsi min nya
function min(input) {
    let min = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < min) {
            min = input[i];
        }
    }
    return min;

}

// Mencari nilai minimum dari array
let min_even_list = min(even_list)
let min_odd_list = min(odd_list)

// Mencari nilai maksimum dari array
let max_even_list = max(even_list)
let max_odd_list = max(odd_list)

// Mencari total dari array
let total_even_list = even_list.reduce((acc, current) => acc + current, 0)
let total_odd_list = odd_list.reduce((acc, current) => acc + current, 0)

console.log("nilai minimal bilangan genap adalah " + min_even_list);
console.log("nilai minimal bilangan ganjil adalah " + min_odd_list);
console.log(max_even_list);
console.log(max_odd_list);
console.log(total_even_list);
console.log(total_odd_list);
console.log("=====================================================================");
// soal 4
// membandingkan dua array
if (min_even_list > min_odd_list) {
    console.log("min genap lebih besar dari min ganjil");
} else {
    console.log("min ganjil lebih besar dari min genap");
}

if (max_even_list > max_odd_list) {
    console.log("max genap lebih besar dari max ganjil");
} else {
    console.log("max ganjil lebih besar dari max genap");
}
// Untuk membandingkan nilai maksimum dari kedua array, 

if (total_even_list === total_odd_list) {
    console.log("Total memiliki nilai sama antara array genap dan ganjil");
} else {
    console.log("Total memiliki nilai tidak sama antara array genap dan ganjil");
}


// Untuk membandingkan rata - rata dari kedua array, 

let rataGenap = total_even_list / even_list.length;
let rataGanjil = total_odd_list / odd_list.length;
if (rataGenap < rataGanjil) {
    console.log("Rata rata lebih besar array ganjil");
} else if (rataGenap > rataGanjil) {
    console.log("Rata rata lebih besar array genap");
} else {
    console.log("Rata rata sama antara array ganjil dan genap");
}