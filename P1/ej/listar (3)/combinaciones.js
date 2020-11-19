var numeros = [3,1,4,2,3];
var combinaciones = [];
var posicion = 0;
    for (var i = 0; i < numeros.length; i++) {
      for (var j = 0; j < numeros.length; j++) {
        for (var k = 0; k < numeros.length; k++) {
          if (numeros[i] != numeros[j] && numeros[i] != numeros[k] && numeros[j] != numeros[k]) {

            combinaciones[posicion++] = [numeros[i], numeros[j], numeros[k]];
          }
        }
      }
    }

console.log(JSON.stringify(combinaciones));
//complejidad computacional cúbica