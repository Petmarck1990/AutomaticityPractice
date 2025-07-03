// Zadatak 1
var colors = ['white', 'green', 'red', 'blue', 'black'];
function text (boje) {
console.log(`The memory of that scene for me is like a frame of film forever frozen at that moment: the ${boje[2]} carpet, the ${boje[1]} lawn, the ${boje[0]} house, the leaden sky. The new president and his first lady. - Richard M. Nixon`);
};
text(colors);

// Zadatak 2
let colors2 = ['white', 'green', 'red', 'blue', 'black'];
function nizBoja (boje) {
for (const boja of boje) {
    console.log(boja)
    }
};
nizBoja(colors2);

// // Zadatak 3
let meseci2 = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
let months = (meseci) => {
    for (const i of meseci) console.log(i);
};
months(meseci2);

// // Zadatak 4
let nizA = [12, 134, 14, 54, 76, 75, 6, 4];
let nizB = [23, 64, 70, 93, 72, 63]
let nizovi = (arrA, arrB) => arrA.length > arrB.length ? console.log(arrA) : console.log(arrB);
nizovi(nizA, nizB); 

// // Zadatak 5
let niz = [12, 42, 32, 94, 63, 38];
function elementiNiza (arr) {
for ( let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    };
}
elementiNiza(niz);
// //ili
let elementiNiza2 = (niz) => {
    for ( let i = 0; i < niz.length; i++) console.log(niz[i]);
}
elementiNiza2(niz);

// // Zadatak 6
let nizbir = [32, 41, 13, 88, 99, 38];
function dodatJedan (arr) {
for ( let i = 0; i < arr.length; i++) {
    console.log(arr[i] + 1)
    };
};
dodatJedan(nizbir);

// // Zadatak 7
let nizduplo = [10, 20, 25, 35, 45, 50];
function dupliraj (arr) {
for (let i = 0; i < arr.length; i++) console.log(arr[i] * 2)
};
dupliraj(nizduplo);

// // Zadatak 8
let nizreverse = [23, 45, 27, 93, 26, 43];
function obrnutNiz (arr) {
for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
};
obrnutNiz(nizreverse);

// // Zadatak 9
let niz2 = [23, 45, 27, 93, 26, 43];
function svakiDrugiElem (arr) {
for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
    console.log(arr[i])
    }
   }
};
svakiDrugiElem(niz2);

// // Zadatak 10
let nizsuma = [24, 45, 27, 93, 26, 43];
function sum (niz) {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i]
    }
    return suma
}
console.log(sum(nizsuma));

// // Zadatak 11
let nizsrvr = [24, 45, 27, 93, 26, 43];
let srvr = function (niz) {
    let niz2 = []
    for (i = 0; i < niz.length; i++) {
        niz2[i] = niz[i] / 2
    }
    return niz2
}
console.log(srvr(nizsrvr))

// // Zadatak 12
let capitals = [
    { country: 'Italy', city: 'Rome' },
    { country: 'Netherlands', city: 'Amsterdam' },
    { country: 'Belgium', city: 'Brussels' },
    { country: 'Denmark', city: 'Copenhagen' },
    { country: 'Finland', city: 'Helsinki' },
];
function gradovi (arr) {
for(const i of arr){
    console.log(`The capital of ${i.country} is ${i.city}`)
    }
};
gradovi(capitals);

// // Zadatak 13
let prirodniBrojevi = [];
function prBrojevi (arr) {
    let rezNiz = []
    for (let i = 1; i <= 100; i++) {
        rezNiz.push(i)
        }
    return rezNiz
};
console.log(prBrojevi(prirodniBrojevi));

// // Zadatak 14
let parni = [];
let neparni = [];
function parniNeparni () {
for (let i = 1; i <= 100; i ++) i % 2 === 0 ? parni.push(i) : neparni.push(i);
};
parniNeparni()
console.log(parni);
console.log(neparni);

// // Zadatak 15
let a = 10;
let b = 40;
function izmedju (x, y) {
let n = [];
for (i = x; i <= y; i++) n.push(i)
    return n
};
console.log(izmedju(a, b));

// // Zadatak 16
let arr = [12, 43, 63, 13, 94, 48, 27, 55];
let numA = 27;
function proveraElementa (niz, a) {
for (let i = 0; i <niz.length; i++) {
    if (a == niz[i])
        console.log('Broj se nalazi u nizu')
    }
};
proveraElementa(arr, numA);

// // Zadatak 17
let arr2 = [12, 43, 63, 13, 94, 48, 27, 55];
function najveci (n) {
    let ne = 0
    for (i = 0; i < n.length; i++) {
        if (n[i] > ne) {
            ne = n[i]
        }
    }
    return ne
}
console.log(najveci(arr2));

// //Zadatak 18
let a1 = [10, 20, 30, 40, 50, 60, 70, 80];
let b1 = [5, 15, 25, 35, 45, 55, 65, 75];
function zbirElemNizova (arr1, arr2) {
for (i = 0; i < arr1.length; i++) {
    console.log(arr1[i] + arr2[i])
    }
};
zbirElemNizova(a1, b1); 

// //Zadatak 19
let kljuc = ['marka', 'model', 'godiste', 'zapremina', 'snaga', 'boja', 'brVrata', 'pogon', 'euro', 'registrovan'];
let element = ['seat', 'leon', 2003, 1598, 77, 'siva', 5, 'prednji', 3, 'da'];
function objekat (arr1, arr2) {
let podaci = {}
for (i = 0; i < arr1.length; i++){
    podaci[arr1[i]] = arr2[i]
    }
    return podaci
}
console.log(objekat(kljuc, element));

// // Zadatak 20
let meseci = [
    {mesec: 'Januar', brojDana: 31},
    {mesec: 'Februar', brojDana: 28},
    {mesec: 'Mart', brojDana: 31},
    {mesec: 'April', brojDana: 30},
    {mesec: 'Maj', brojDana: 31},
    {mesec: 'Jun', brojDana: 30},
    {mesec: 'Jul', brojDana: 31},
    {mesec: 'Avgust', brojDana: 31},
    {mesec: 'Septembar', brojDana: 30},
    {mesec: 'Oktobar', brojDana: 31},
    {mesec: 'Novembar', brojDana: 30},
    {mesec: 'Decembar', brojDana: 31},
];
function meseciIDani (arr) {
for (const i of arr) {
    for (x = 1; x <= i.brojDana; x++){
        console.log(`${x}. ${i.mesec}`)
    }
    }
};
meseciIDani(meseci);