var numero = [];
for (let i = 0; i < 20; i++) {
    if (i%2 == 1) {
        if (i==1||i==5||i==9||i==13||i==17) {
            numero[i] = (i-(i*2));    
        }else{
            numero[i] = i;
        }     
   }
}
console.log(numero)