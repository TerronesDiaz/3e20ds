let S=[3,1,4,2,3] 
var repetidos = [];
var temporal = [];
S.forEach((value,index)=>{
  temporal = Object.assign([],S); 
  temporal.splice(index,1);
  
  if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1){
    repetidos.push(value);
  }
        
});
if (repetidos.length > 0){
  console.log('Si, los numeros repetidos son: ' + repetidos)
}else{
  console.log('No hay números repetidos')
}
//Complejidad computacional logarítmica