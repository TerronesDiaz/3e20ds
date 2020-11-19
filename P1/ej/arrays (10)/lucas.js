var numeros = [];
var b = 1;var c = 2;
for (let i = 0; i < 9; i++) {
    if(i == 0){
  numeros[i] = 2    
    }else if (i == 1) {
  numeros[i] = 1      
    } else {
        c = c + b;
        numeros[i] = c

        i++
        b = c + b;
        numeros[i] = b
 
    }
}
console.log(numeros)