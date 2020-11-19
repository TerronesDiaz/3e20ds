let n = Number(prompt("Cuántos números quiere generar?"))
let numeros = [];
for (let i = 0; i < n; i++) {
    numeros[i] = Math.random() * [10 - 1] + 1;;
}
console.log(numeros)




