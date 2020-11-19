let S = [3,1,4,2,3]
function permutar(numeros){
    let n = numeros.length;
    let resultado = [];
    if (n<2) {
        resultado = [...numeros];
    } else if (n===2) {
        resultado = [[numeros[0], numeros[1]], [numeros[1], numeros[0]]];
    } else {
        for (let j=0; j<n; j++) {
            let listaMenor = numeros.slice(0,j).concat(numeros.slice(j+1));
            let subResulto = permutar(listaMenor);
            for (let i=0; i<subResulto.length; i++){
                resultado.push([numeros[j], ...subResulto[i]]);
            }
        }
    }
    return resultado;
}
console.log(permutar(S))
//Complejidad computacional cuadrática