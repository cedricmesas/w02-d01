// Méthode récursive nombre premier
const isPrimeNumber = (n, i = 3) => {
    if(n === 2) return true;
    if(n < 2 || n % 2 === 0)  return false;
    if(i * i > n) return true;
    if(n % i === 0) return false;
    return isPrimeNumber(n, i + 2);
};

console.log(isPrimeNumber(7));


const findSupPrime = (n) => {}