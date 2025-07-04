// Zadatak 1
function max(arr) {
  let high = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < high) {
      high = arr[i];
    }
  }
  return high;
}
let niz = [23, 35, 63, 33, 89, 92, 42, 7];
const result1 = max(niz);
console.log(result1);

// Zadatak 2
let sum = function (arr) {
  let suma = 0;
  for (const i of arr) {
    suma += i;
  }
  return suma;
};
let arr2 = [23, 35, 63, 33, 89, 92, 42, 7];
const result2 = sum(arr2);
console.log(result2);

// Zadatak 3
let niz2 = [1, 3, 5, 7];
function proizvod(arr) {
  let mult = 1;
  for (const i of arr) {
    mult *= i;
  }
  return mult;
}
const result3 = proizvod(niz2);
console.log(result3);

// Zadatak 4
let k = 10;
let b = 35;
function neparni(x, y) {
  let niz3 = [];
  for (i = x; i <= y; i++) {
    if (i % 2 != 0) {
      niz3.push(i);
    }
  }
  return niz3;
}
const result4 = neparni(k, b);
console.log(result4);

// Zadatak 5
let niz3 = [23, 35, 63, 33, 89, 92, 42, 7];
function sredVr(arr) {
  let srednjaVrEl = [];
  for (const a of arr) {
    srednjaVrEl.push(a / 2);
  }
  return srednjaVrEl;
}
const result5 = sredVr(niz3);
console.log(result5);

// Zadatak 6
let niz4 = [7, 35, 53, 63, 89, 92];
function granica(arr, a, b) {
  for (const x of arr) {
    x >= a && x <= b ? console.log(true) : console.log(false);
  }
}
const result6 = granica(niz4, Math.min(...niz4), Math.max(...niz4));
result6;

// Zadatak 7
let niz5 = [23, 35, 63, 33, 89, 92, 42, 7];
function granica2(arr, a, b) {
  for (const x of arr) {
    x >= a && x <= b ? console.log(true) : console.log(false);
  }
}
let result7 = granica2(niz5, Math.min(...niz5), Math.max(...niz5));
result7;

// Zadatak 8
let n = 10;
function desetka(broj) {
  let arr = [];
  for (i = broj; arr.length < 10; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
const result8 = desetka(n);
console.log(result8);

// Zadatak 9
let array = [23, 7, 35, 63, 7, 89, 92, 42, 7];
let a = 7;
function check(arr, i) {
  return arr.filter((el) => el === i).length;
}
const result9 = check(array, a);
console.log(result9);

// Zadatak 10
let array2 = [23, 7, 35, 63, 7, 89, 92, 42, 7];
let a3 = 7;
function check(arr, i) {
  let newArr = [];
  for (const x of arr) {
    if (x % i === 0) {
      newArr.push(x);
    }
  }
  return newArr.length;
}
const result10 = check(array2, a3);
console.log(result10);

// Zadatak 11
let niz6 = [23, 7, 35, 63, 89, 92, 42];
let najmanji = (arr) => arr.indexOf(Math.min(...arr));
const result11 = najmanji(niz6);
console.log(result11);

// Zadatak 12
let niz2d = [
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8, 10],
];
function podelementi(arr) {
  let stringForDisplay = "";
  for (const i of arr) {
    for (const x of i) {
      stringForDisplay += x + "\n";
    }
  }
  return stringForDisplay;
}
const result12 = podelementi(niz2d);
console.log(result12);

// Zadatak 13
let niz2d2 = [
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8, 10],
];
function suma(arr) {
  let sum = 0;
  for (const i of arr) {
    for (const x of i) sum += x;
  }
  return sum;
}
const result13 = suma(niz2d2);
console.log(result13);

// Zadatak 14
let niz12 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let niz13 = ["down", "down", "right", "down", "right"];
function kretanje(niz12, niz13) {
  let i = 0;
  let j = 0;
  for (const korak of niz13) {
    switch (korak) {
      case "down":
        i++;
        break;
      case "right":
        j++;
        break;
      case "up":
        i--;
        break;
      case "left":
        j--;
        break;
      default:
        console.log("Unknown step");
    }
  }
  return (pozicija = niz12[i][j]);
}
const result14 = kretanje(niz12, niz13);
console.log(result14);

// Zadatak 15
let niz7 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let niz8 = ["up", "up", "up", "left", "left", "down"];
function kretanje(niz7, niz8) {
  let i = 0;
  let j = 0;
  for (const korak of niz8) {
    switch (korak) {
      case "down":
        i > niz7.length ? (i = 0) : i++;
        break;
      case "right":
        j > niz7.length ? (j = 0) : j++;
        break;
      case "up":
        i <= 0 ? (i = niz7[0].length - 1) : i--;
        break;
      case "left":
        j <= 0 ? (j = niz7.length - 1) : j--;
        break;
      default:
        console.log("Unknown step");
    }
  }
  return (pozicija = niz7[i][j]);
}
const result15 = kretanje(niz7, niz8);
console.log(result15);

// Zadatak 16
function noviNiz(arr) {
  let arr2 = [];
  while (arr.length > 0) {
    let najmanji = Math.min(...arr);
    arr2.push(najmanji);
    arr.splice(arr.indexOf(najmanji), 1);
  }
  return arr2;
}
const niz9 = [23, 7, 35, 63, 89, 92, 42];
const result16 = noviNiz(niz9);
console.log(result16);
console.log(niz9);

// Zadatak 17
const niz11 = [6, 10, 13, 18, 16, 3, 2];
function najmanjaRazlika(arr) {
  let minRazlika = Infinity;
  let niz2najbliza = [];
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let razlika = Math.abs(arr[i] - arr[j]);
      if (razlika < minRazlika) {
        minRazlika = razlika;
        niz2najbliza = [arr[i], arr[j]];
      }
    }
  }
  return niz2najbliza;
}
const result17 = najmanjaRazlika(niz11);
console.log(result17);

// Zadatak 18
let a1 = [4, 1, 5, 1, 6, 2, 7, 1];
let a2 = [4, 3, 2, 1];
function check2(arr1, arr2) {
  let a3 = [];
  for (const i of arr2) {
    let m = arr1.filter((el) => el === i).length;
    a3.push(m);
  }
  return a3;
}
const result18 = check2(a1, a2);
console.log(result18);
