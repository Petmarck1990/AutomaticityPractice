// Zadatak 1
var colors = ['white', 'green', 'red', 'blue', 'black'];
console.log(`The memory of that scene for me is like a frame of film forever frozen at that moment: the ${colors[2]} carpet, the ${colors[1]} lawn, the ${colors[0]} house, the leaden sky. The new president and his first lady. - Richard M. Nixon`);

// Zadatak 2
let colors2 = ['white', 'green', 'red', 'blue', 'black'];
for (const i of colors2) {
    console.log(i)
};

// Zadatak 3
let meseci2 = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
for (const i of meseci2) console.log(i);

// Zadatak 4
let nizA = [12, 134, 14, 54, 76, 75, 6, 4];
let nizB = [23, 64, 70, 93, 72, 63]
nizA.length > nizB.length ? console.log(nizA) : console.log(nizB)

// Zadatak 5
let niz = [12, 42, 32, 94, 63, 38];
for ( let i = 0; i < niz.length; i++) {
    console.log(niz[i])
};
//ili
for ( let i = 0; i < niz.length; i++) console.log(niz[i]);

// Zadatak 6
let nizbir = [32, 41, 13, 88, 99, 38];
for ( let i = 0; i < nizbir.length; i++) {
    console.log(nizbir[i] + 1)
};

// Zadatak 7
let nizduplo = [10, 20, 25, 35, 45, 50];
for ( let i = 0; i < nizduplo.length; i++) console.log(nizduplo[i] * 2)

// Zadatak 8
let nizreverse = [23, 45, 27, 93, 26, 43];
for (let i = nizreverse.length - 1; i >= 0; i--) console.log(nizreverse[i]);

// Zadatak 9
let niz2 = [23, 45, 27, 93, 26, 43];
for (let i = 0; i < niz2.length; i++) {
    if (i % 2 != 0) {
    console.log(niz2[i])
    }
};

// Zadatak 10
let nizsuma = [24, 45, 27, 93, 26, 43];
function sum (niz) {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i]
    }
    return suma
}
console.log(sum(nizsuma));

// Zadatak 11
let nizsrvr = [24, 45, 27, 93, 26, 43];
let srvr = function (niz) {
    let niz2 = []
    for (i = 0; i < niz.length; i++) {
        niz2[i] = niz[i] / 2
    }
    return niz2
}
console.log(srvr(nizsrvr))

// Zadatak 12
let capitals = [
    { country: 'Italy', city: 'Rome' },
    { country: 'Netherlands', city: 'Amsterdam' },
    { country: 'Belgium', city: 'Brussels' },
    { country: 'Denmark', city: 'Copenhagen' },
    { country: 'Finland', city: 'Helsinki' },
];
for(const i of capitals){
    console.log(`The capital of ${i.country} is ${i.city}`)
};

// Zadatak 13
let prirodniBrojevi = [];
for (let i = 1; i <= 100; i++) {
    prirodniBrojevi.push(i)
}
console.log(prirodniBrojevi);

// Zadatak 14
let parni = [];
let neparni = [];
for (let i = 1; i <= 100; i ++) i % 2 === 0 ? parni.push(i) : neparni.push(i);
console.log(parni);
console.log(neparni);

// Zadatak 15
let a = 10;
let b = 40;
let n = [];
for (i = a; i <= b; i++) n.push(i)
console.log(n)

// Zadatak 16
let arr = [12, 43, 63, 13, 94, 48, 27, 55];
let numA = 27;
for (let i = 0; i <arr.length; i++) {
    if (numA == arr[i])
        console.log('Broj se nalazi u nizu')
}

// Zadatak 17
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

//Zadatak 18
let a1 = [10, 20, 30, 40, 50, 60, 70, 80];
let b1 = [5, 15, 25, 35, 45, 55, 65, 75];
for (i = 0; i < a1.length; i++) {
    console.log(a1[i] + b1[i])
};

//Zadatak 19
let kljuc = ['marka', 'model', 'godiste', 'zapremina', 'snaga', 'boja', 'brVrata', 'pogon', 'euro', 'registrovan'];
let element = ['seat', 'leon', 2003, 1598, 77, 'siva', 5, 'prednji', 3, 'da'];
let podaci = {}
for (i = 0; i < kljuc.length; i++){
    podaci[kljuc[i]] = element[i]
}
console.log(podaci);

// Zadatak 20
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
]
for (const i of meseci) {
    for (x = 1; x <= i.brojDana; x++){
        console.log(`${x}. ${i.mesec}`)
    }
}