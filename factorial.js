// Méthode itérative factorielle
const computeFactorialIt = (n) => {
    if (n === 0 || n === 1)
        return 1;
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
        return n;
};

console.log(computeFactorialIt(5));

// Méthode recursive factorielle
const computeFactorialRec = (n) => {
    if (n < 0) 
        return -1;
    else if (n == 0) 
        return 1;
    else {
        return (n * computeFactorialRec(n - 1));
    }
};

console.log(computeFactorialRec(5));