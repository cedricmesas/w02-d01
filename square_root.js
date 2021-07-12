// Méthode itérative racine carrée
const computeSquareRootIt = (n) => {
    for (var i = 0; i * i <= n; i++) {
        if (i * i === n)
        return i;
    }
    return n;
};

console.log(computeSquareRootIt(144));

// Méthode récursive racine carrée
const computeSquareRootRec = (n, p) => {
    if (!p) {
        p = n / 2.0;
    }
    var div = n / p;
    var res = (div + p) / 2.0;
    if (p == res) {
        return p
    }
    return computeSquareRootRec(n, res);
};

console.log(computeSquareRootRec(144));