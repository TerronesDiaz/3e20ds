let lucas = function(){
let record = [2, 1];
let nLucas = function(n){
let resultado = record[n];
		if (typeof resultado != 'number') {
			resultado = nLucas(n - 1) + nLucas(n - 2);
			record[n] = resultado;
		}
		return resultado;
	};
	return nLucas;
}();
console.log(lucas(4));
