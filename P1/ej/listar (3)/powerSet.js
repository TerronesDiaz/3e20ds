var powerSet = function(numeros) {
    if(numeros.length === 0) return [numeros];
    
    let x = numeros[0];
    let rest = powerSet(numeros.slice(1)); //Recursividad
    
    let tmp = [];
    for(let i=0; i<rest.length;i++) {
        tmp.push([x].concat(rest[i]));
    }
    
    return tmp.concat(rest);

};

let n = [3,1,4,2,3];

console.log('El resultado es: ' + (powerSet(n)));
//Complejidad computacional cuadrática, por el hecho de ser recursiva
