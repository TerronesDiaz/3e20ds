var numeros = [];
let x = 10;
for (let y = 1; y < 11; y++) {
   numeros[y] = (x + " ^ " + y + " = " + Math.pow(x,y));
   
}
console.log(numeros)