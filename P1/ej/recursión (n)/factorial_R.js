for (let i = 1; i <= 10; i++) {
    console.log(factorial(i))
}
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}