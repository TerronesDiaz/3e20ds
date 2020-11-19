function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
    return total;
}
let simbolos = 8
console.log('Se pueden generar ' + factorial(simbolos) + ' simbolos')