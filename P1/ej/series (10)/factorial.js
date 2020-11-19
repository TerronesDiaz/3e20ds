for (let j = 1; j < 11; j++) {
let numero = j;
var  total = numero;
for( var i = numero - 1; i >= 1; i--) {
    total = total *i;
}
console.log(' su factorial de ' + numero + ' es ' + total);
}