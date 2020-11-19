function esPrimo(n) {
    let i = 1;
    while (n % ++i != 0);
    return n == i;
  }
  
  for (let i = 2; i < 30; i++)
    if (esPrimo(i) && i==11)
      console.log("El quinto número primo es: " + i);