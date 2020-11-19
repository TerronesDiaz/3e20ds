let S=[3,1,4,2,3]
var min = S[0];

for(i=1;i<S.length;i++){ 
    if(S[i]<min){
       min=S[i]   
    }
}
console.log('El mínimo es: ' + min); 
//Complejidad computacional lineal