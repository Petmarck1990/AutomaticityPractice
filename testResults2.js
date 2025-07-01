// Zadatak 1
let f = function (N) {
    return N * 2
};
console.log(f(15));

// Zadatak 2
let humanToDogYears = (N) => N * 7;
console.log(humanToDogYears(35));

// Zadatak 3
let celsiusToFahrenheit = (c) => c * 9 / 5 + 32;
console.log(celsiusToFahrenheit(25));

//Zadatak 4
let fahrenheitToCelsius = (f) => (f-32) * 5 / 9;
console.log(fahrenheitToCelsius(32));

//Zadatak 5
const anonymousDogAge = function (N) {
    return N * 7
}
console.log(anonymousDogAge(10));

// Zadatak 6
let dif = function (a, b) {
    return a - b
};
console.log(dif(12,6));

// Zadatak 7
let fun = function (a, b, c) {
    return (a * b) - c
}
console.log(fun(10, 6, 28));

// Zadatak 8
const fun2 = function (a, b, c) {
    if (a > 0) {
        return b + c
    } else {
        return b - c
    }
};
console.log(fun2(0, 10, 5));