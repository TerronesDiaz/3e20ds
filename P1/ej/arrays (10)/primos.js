nPrimos = [];
function esPrimo(n) {
    let i = 1;
    while (n % ++i != 0);
    return n == i;
  }
  
  for (let i = 2; i < 30; i++)
    if (esPrimo(i)){
       nPrimos[i] = i
       console.log(nPrimos[i])
    }
      