let numeros = [];
let n = Number(prompt("Cuántos números quiere generar?"))
   for (let i = 1; i <= n; i++) {
    if(i == 1){
        numeros[i]= '1'
        console.log(numeros[i])
    }else{
        numeros[i]= '+ 1/'+ i;
        console.log(numeros[i])
    }       
   }