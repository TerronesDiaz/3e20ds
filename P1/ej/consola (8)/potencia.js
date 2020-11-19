let n = Number(prompt("Ingrese la cantidad de potencias a generar: "))
let numeros = [];
let x = 10;
    for (let y = 1; y <= n; y++) {
       numeros[y] = (x + " ^ " + y + " = " + Math.pow(x,y));
       console.log(numeros[y])
    }
