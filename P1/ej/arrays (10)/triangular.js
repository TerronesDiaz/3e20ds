var numeros = [];
var nSumador;
var nTriangular = 0;
for (let i = 0; i < 10; i++) {
   nSumador = i + 1;
   nTriangular = nTriangular + nSumador;
   numeros[i] = nTriangular;
}
console.log(numeros)