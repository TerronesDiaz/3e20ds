let S=[3,1,4,2,3]
var max = S[0];

for(i=1;i<S.length;i++){ 
    if(S[i]>max){
       max=S[i]   
    }
}
console.log('El máximo es: ' + max); 
//Complejidad computacional lineal