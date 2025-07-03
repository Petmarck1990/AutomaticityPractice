// Zadatak 1
let a = 6;
let b = 8;
if (a + b > 10) {
    console.log(a + b)
} else {
    console.log(a - b)
};

// Zadatak 2
let h = 8
if (h > 22 || h < 6) {
    console.log("Palim bojler")
} else {
    console.log("Ne palim bojler")
};

// Zadatak 3
let vrednost = "5";
if (vrednost == typeof(Number)) {
    console.log(`vrednost je ${typeof(vrednost)}`)
} else {
    console.log(`vrednost je ${typeof(vrednost)}`)
};

// Zadataka 4
let m = Math.round(Math.random()*11 + 1);
if (m <= 3) {
    console.log(`Mesec pod rednim brojem ${m} pripada prvom kvartalu i tad je zima`)
} else if (m >= 3 && m <= 6){
    console.log(`Mesec pod rednim brojem ${m} pripada drugom kvartalu i tad je prolece`)
} else if (m >= 6 && m <= 9){
    console.log(`Mesec pod rednim brojem ${m} pripada trecem kvartalu i tad je leto`)
} else {
    console.log(`Mesec pod rednim brojem ${m} pripada cetvrtom kvartalu i tad je jesen`)
};

// Zadatak 5
let x = 8;
let y = 2;
let operacija = "podeli";
if (operacija == "saberi") {
    console.log(x + y)
} else if (operacija == "oduzmi") {
    console.log(x - y)
} else if (operacija == "pomnozi") {
    console.log(x * y)
} else if (operacija == "podeli") {
    console.log(x / y)
} else {
    console.log("Operacija nije poznata")
}

// Zadatak 6
let brojBodova = Math.round(Math.random()*100)
if (brojBodova < 55) {
    console.log(`Ocena 5, ${brojBodova}`)
} else if (brojBodova >= 55 && brojBodova <= 64) {
    console.log(`Ocena 6, ${brojBodova}`)
} else if (brojBodova >= 65 && brojBodova <= 74) {
    console.log(`Ocena 7, ${brojBodova}`)
} else if (brojBodova >= 75 && brojBodova <= 84) {
    console.log(`Ocena 8, ${brojBodova}`)
} else if (brojBodova >= 85 && brojBodova <= 94) {
    console.log(`Ocena 9, ${brojBodova}`)
} else if (brojBodova >= 95) {
    console.log(`Ocena 10, ${brojBodova}`)
}

//Zadatak 7
let br = Math.round(Math.random()*100)
br % 2 !== 0 ? console.log(`${br} je neparan broj`) : console.log(`${br} je paran broj`)

// Zadatak 8
let brojGodine = 2025;
brojGodine % 4 === 0 ? console.log(`Godina ${brojGodine}. je prestupna.`) : console.log(`Godina ${brojGodine}. nije prestupna.`);

// Zadatak 9
let n = 924;
if (n <= 9) {
    console.log(`Broj ${n} je jednocifredn!`)
} else if (n >= 10 && n <= 99) {
    console.log(`Broj ${n} je dvocifren!`)
} else if (n >= 100 && n <= 999) {
    console.log(`Broj ${n} je trocifren!`)
} else {
    console.log("Unesite broj izmedju 0 i 999")
};

// Zadatak 10
function helolo(a,b,c) {
    let highest
    let lowest
    if (a >= b && a >= c) {
        highest = a
    } else if (b >= a && b >= c) {
        highest = b
    } else {
        highest = c
    };

    if (a <= b && a <= c) {
        lowest = a
    } else if (b <= a && b <= c) {
        lowest = b
    } else {
        lowest = c
    };
    return `najveci broj je ${highest}, a najmanji broj je ${lowest}`
}

let result = helolo(1,2,5)
console.log(result)

// Zadatak 11
function ulaz(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a)
        if (b >= c) {
            console.log(b)
            console.log(c)
        } else {
            console.log(c)
            console.log(b)
        }
    } else if (b >= a && b >= c) {
        console.log(b)
        if (a >= c) {
            console.log(a)
            console.log(c)
        } else {
            console.log(c)
            console.log(a)
        }
    } else {
        console.log(c)
        if (a >= b) {
            console.log(a)
            console.log(b)
        } else {
            console.log(b)
            console.log(a)
        }
    };
};

let brojevi = ulaz(12, 45, 28);
console.log(brojevi);