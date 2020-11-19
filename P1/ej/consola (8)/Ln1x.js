let numeros = [];
let n = Number(prompt("Cuántos números de la sucesión quiere generar?"))
   for (let i = 1; i <= n; i++) {
    if(i == 1){
        numeros[i]= 'x'
        console.log(numeros[i])
    }else if(i%2 == 0){
        numeros[i]= '- x ^ '+ i + '/' + i;
        console.log(numeros[i])
    }else{
        numeros[i]= '+ x ^ '+ i + '/' + i;
        console.log(numeros[i])  
    }       
   }