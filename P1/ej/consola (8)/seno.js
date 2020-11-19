let n = Number(prompt("Ingrese cuántos números de seno se van a generar: "))
   for (let i = 1; i <= n; i++) {
   numeros[i] = Math.sin(i) 
   console.log('El seno de ' + i + ' es igual a ' + numeros[i])       
   }
