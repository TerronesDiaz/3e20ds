function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
let n = 3
    let fac = factorial(n);
    let fac2 = factorial(n-2);

var saludos = fac/(2*fac2);

console.log('De ' + n + ' personas que asistieron, '  + 'ocurrieron ' + saludos + ' saludos');
