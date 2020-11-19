let n = Number(prompt("Hasta que número de factorial desea generar?"))
let numeros = [];
    for (let j = 0; j <= n; j++) {
        let numero = j;
        var  total = numero;
    if(j == 0 || j == 1){
        numeros[j] = 1;
        console.log(' El factorial de ' + j + ' es ' + numeros[j]); 
    }else{
    
    for( var i = numero - 1; i >= 1; i--) {
        total = total *i;
        numeros[j] = total;
        }
        console.log(' El factorial de ' + j + ' es ' + numeros[j]);
    }
    };
