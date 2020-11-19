let S=[3,1,4,2,3];
let sum = S.reduce((previous, current) => current += previous);
let avg = sum / S.length;
console.log('El promedio de los números es ' + avg);
//Complejidad computacional Lineal