// Zadatak 1
var colors = ["white", "green", "red", "blue", "black"];
function text(boje) {
  return `The memory of that scene for me is like a frame of film forever frozen at that moment: the ${boje[2]} carpet, the ${boje[1]} lawn, the ${boje[0]} house, the leaden sky. The new president and his first lady. - Richard M. Nixon`;
}
const result1 = text(colors);
console.log(result1);

// Zadatak 2
let colors2 = ["white", "green", "red", "blue", "black"];
function nizBoja(arr) {
  let stringForDisplay = "";
  for (const boja of arr) {
    stringForDisplay += boja + "\n";
  }
  return stringForDisplay;
}
const result2 = nizBoja(colors2);
console.log(result2);

// Zadatak 3
let meseci2 = [
  "januar",
  "februar",
  "mart",
  "april",
  "maj",
  "jun",
  "jul",
  "avgust",
  "septembar",
  "oktobar",
  "novembar",
  "decembar",
];
let months = (meseci) => {
  let stringForDisp = "";
  for (const mesec of meseci) {
    stringForDisp += mesec + "\n";
  }
  return stringForDisp;
};
const result3 = months(meseci2);
console.log(result3);

// Zadatak 4
let nizA = [12, 134, 14, 54, 76, 75, 6, 4];
let nizB = [23, 64, 70, 93, 72, 63];
let nizovi = (arrA, arrB) => (arrA.length > arrB.length ? arrA : arrB);
const result4 = nizovi(nizA, nizB);
console.log(result4);

// Zadatak 5
let niz = [12, 42, 32, 94, 63, 38];
let elementiNiza2 = (niz) => {
  let stringForDisplay = "";
  for (let i = 0; i < niz.length; i++) {
    stringForDisplay += niz[i] + "\n";
  }
  return stringForDisplay;
};
const result5 = elementiNiza2(niz);
console.log(result5);

// Zadatak 6
let nizbir = [32, 41, 13, 88, 99, 38];
function dodatJedan(arr) {
  let stringForDysplay = "";
  for (let i = 0; i < arr.length; i++) {
    m = arr[i] + 1;
    stringForDysplay += m + "\n";
  }
  return stringForDysplay;
}
const result6 = dodatJedan(nizbir);
console.log(result6);

// Zadatak 7
let nizduplo = [10, 20, 25, 35, 45, 50];
function dupliraj(arr) {
  let stringForDisplay = "";
  for (let i = 0; i < arr.length; i++) {
    m = arr[i] * 2;
    stringForDisplay += m + "\n";
  }
  return stringForDisplay;
}
const result7 = dupliraj(nizduplo);
console.log(result7);

//Zadatak 8
let nizreverse = [23, 45, 27, 93, 26, 43];
function obrnutNiz(arr) {
  let stringForDisplay = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    stringForDisplay += arr[i] + "\n";
  }
  return stringForDisplay;
}
const result8 = obrnutNiz(nizreverse);
console.log(result8);

//Zadatak 9
let niz2 = [23, 45, 27, 93, 26, 43];
function svakiDrugiElem(arr) {
  let stringForDisplay = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      stringForDisplay += arr[i] + "\n";
    }
  }
  return stringForDisplay;
}
const result9 = svakiDrugiElem(niz2);
console.log(result9);

// Zadatak 10
let nizsuma = [24, 45, 27, 93, 26, 43];
function sum(niz) {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma = suma + niz[i];
  }
  return suma;
}
const result10 = sum(nizsuma);
console.log(result10);

// Zadatak 11
let nizsrvr = [24, 45, 27, 93, 26, 43];
let srvr = function (niz) {
  let niz2 = [];
  for (i = 0; i < niz.length; i++) {
    niz2[i] = niz[i] / 2;
  }
  return niz2;
};
const result11 = srvr(nizsrvr);
console.log(result11);

// Zadatak 12
let capitals = [
  { country: "Italy", city: "Rome" },
  { country: "Netherlands", city: "Amsterdam" },
  { country: "Belgium", city: "Brussels" },
  { country: "Denmark", city: "Copenhagen" },
  { country: "Finland", city: "Helsinki" },
];
function gradovi(arr) {
  let stringForDisplay = "";
  for (const i of arr) {
    stringForDisplay += `The capital of ${i.country} is ${i.city}` + "\n";
  }
  return stringForDisplay;
}
const result12 = gradovi(capitals);
console.log(result12);

// Zadatak 13
let prirodniBrojevi = [];
function prBrojevi(arr) {
  let rezNiz = [];
  for (let i = 1; i <= 100; i++) {
    rezNiz.push(i);
  }
  return rezNiz;
}
const result13 = prBrojevi(prirodniBrojevi);
console.log(result13);

// Zadatak 14
let parni = [];
let neparni = [];
function parniNeparni() {
  for (let i = 1; i <= 100; i++) i % 2 === 0 ? parni.push(i) : neparni.push(i);
}
const result14 = parniNeparni();
console.log(parni);
console.log(neparni);

// Zadatak 15
let a = 10;
let b = 40;
function izmedju(x, y) {
  let n = [];
  for (i = x; i <= y; i++) n.push(i);
  return n;
}
const result15 = izmedju(a, b);
console.log(result15);

// Zadatak 16
let arr = [12, 43, 63, 13, 94, 48, 27, 55];
let numA = 27;
function proveraElementa(niz, a) {
  for (let i = 0; i < niz.length; i++) {
    if (a == niz[i]) return "Broj se nalazi u nizu";
  }
}
const result16 = proveraElementa(arr, numA);
console.log(result16);

// Zadatak 17
let arr2 = [12, 43, 63, 13, 94, 48, 27, 55];
function najveci(n) {
  let ne = 0;
  for (i = 0; i < n.length; i++) {
    if (n[i] > ne) {
      ne = n[i];
    }
  }
  return ne;
}
const result17 = najveci(arr2);
console.log(Math.max(...arr2));
console.log(result17);

// Zadatak 18
let a1 = [10, 20, 30, 40, 50, 60, 70, 80];
let b1 = [5, 15, 25, 35, 45, 55, 65, 75];
function zbirElemNizova(arr1, arr2) {
  let stringForDisplay = "";
  for (i = 0; i < arr1.length; i++) {
    let m = arr1[i] + arr2[i];
    stringForDisplay += m + "\n";
  }
  return stringForDisplay;
}
const result18 = zbirElemNizova(a1, b1);
console.log(result18);

// Zadatak 19
let kljuc = [
  "marka",
  "model",
  "godiste",
  "zapremina",
  "snaga",
  "boja",
  "brVrata",
  "pogon",
  "euro",
  "registrovan",
];
let element = ["seat", "leon", 2003, 1598, 77, "siva", 5, "prednji", 3, "da"];
function objekat(arr1, arr2) {
  let podaci = {};
  for (i = 0; i < arr1.length; i++) {
    podaci[arr1[i]] = arr2[i];
  }
  return podaci;
}
const result19 = objekat(kljuc, element);
console.log(result19);

// Zadatak 20
let meseci = [
  { mesec: "Januar", brojDana: 31 },
  { mesec: "Februar", brojDana: 28 },
  { mesec: "Mart", brojDana: 31 },
  { mesec: "April", brojDana: 30 },
  { mesec: "Maj", brojDana: 31 },
  { mesec: "Jun", brojDana: 30 },
  { mesec: "Jul", brojDana: 31 },
  { mesec: "Avgust", brojDana: 31 },
  { mesec: "Septembar", brojDana: 30 },
  { mesec: "Oktobar", brojDana: 31 },
  { mesec: "Novembar", brojDana: 30 },
  { mesec: "Decembar", brojDana: 31 },
];
function meseciIDani(arr) {
  let stringForDisplay = "";
  for (const i of arr) {
    for (x = 1; x <= i.brojDana; x++) {
      let m = `${x}. ${i.mesec}`;
      stringForDisplay += m + "\n";
    }
  }
  return stringForDisplay;
}
const result20 = meseciIDani(meseci);
console.log(result20);
