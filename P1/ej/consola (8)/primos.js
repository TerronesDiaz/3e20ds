let n = Number(prompt("Hasta que número se va a tomar en cuenta para calcular los numeros primos? "))
let nPrimos = [];
    function esPrimo(n) {
      let i = 1;
      while (n % ++i != 0);
      return n == i;
      }
      
      for (let i = 2; i < n; i++)
      if (esPrimo(i)){
      nPrimos[i] = i
      console.log(nPrimos[i])
      }