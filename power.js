// Méthode itérative puissance
const computePowerIt = (n, p) => {
    let result = 1;
    while (p--) {
        result *= n;
    }
    return result;
};

let n = 2;
let p = 3;

console.log(computePowerIt(n, p));

// Méthode récursive puissance
const computePowerRec = (n, p) => {
    return p == 0? 1 : n * computePowerRec(n, --p);
};

let n = 2;
let p = 3;

console.log(computePowerRec(n, p));