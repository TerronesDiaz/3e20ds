console.log("Ejemplo de WeakMap")
const miWeakMap = new WeakMap(); //un WeakMap únicamente puede soprtar llaves de tipo objeto, es decir sus atributos o propiedades.
let llave0 = {};                   
let llave1 = {};                 
let llave2 = {};                 

miWeakMap.set(llave0,0)
         .set(llave1,1)
         .set(llave2,"Hallo welt \n\n") //con .set se le pueden añadir llaves o atributos
                                      
 console.log(miWeakMap.get(llave0));
 console.log(miWeakMap.get(llave1));
 console.log(miWeakMap.get(llave2));   //Es posible obtener los elementos con .get

for(i= 0; i < 2; i++)
{
    console.log(miWeakMap.has(llave0)); //Se puede usar .has para saber si está vació o no. 
    console.log(miWeakMap.has(llave1)); 
    console.log(miWeakMap.has(llave2),"\n");
                                        
    miWeakMap.delete(llave0);
    miWeakMap.delete(llave1);
    miWeakMap.delete(llave2); //Se borra haciendo uso de .delet
}                                      
  
console.log("Ejemplo de Map");

let miMap = new Map();
let prop = 'hm'  
miMap.set('propiedad1', 20)     
     .set(prop, "Esto es una propiedad")                            
     .set(' Hola ', " adios ")
      console.log("Tamaño del map : [", Map.length,"] velores")
console.log(miMap)                // Se puede imprimir todo con console.log

for(i = 0; i < 2; i++)
{
  console.log(miMap.has('hm'))
  console.log(miMap.has('propiedad1'))
  console.log(miMap.has('bella')) //Se puede comprobar elementos con has
  console.log(miMap, "\n")
  miMap.clear();                //Con .clear se puede vaciar por completo
}                                      