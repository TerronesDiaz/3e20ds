var numeros = [];
for (let j = 0; j < 11; j++) {
    let numero = j;
    var  total = numero;
if(j == 0 || j == 1){
    numeros[j] = 'El factorial de ' + j + ' es ' + 1; 
}else{

for( var i = numero - 1; i >= 1; i--) {
    total = total *i;
    numeros[j] = 'El factorial de ' + j + ' es ' +  total;
    }
}
}
console.log(numeros)
