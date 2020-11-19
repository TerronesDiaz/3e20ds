let numeros = [];
let n = Number(prompt("Ingrese la cantidad de números a generar: "))
   for (let i = 1; i <= n; i++) {
    if(i == 1){
        numeros[i]= 'x'
        console.log(numeros[i])
    }else if(i%2 == 0){
        numeros[i]= '- 1/'+ i;
        console.log(numeros[i])
    }else{
        numeros[i]= '+ 1/'+ i;
        console.log(numeros[i])  
    }       
   }
