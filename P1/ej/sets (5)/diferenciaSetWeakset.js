var n = new WeakSet();
n.add({});

let valor1 = {nombre:'Rojo'};
let valor2 = {nombre:'Negro'};
n.add(valor1); n.add(valor2); ".add se usa para agregar valores"
console.log("EJEMPLO DE WEAKSET")
 for (i = 0; i <2; i++)
 {
  console.log(n)//Primero se imprime para ver si tiene o no valores

  console.log(n.has(valor1))//con la funcion has() podemos ver los objetos de las variables existentes.
  console.log(n.has(valor2),"\n")

    //Deevolverá True o False según existan o no los objetos
    n.delete(valor1)
    n.delete(valor2)
}
//Solo almacena objetos, y la forma de guardado es muy debil y si un valor es nulo se elimina

 console.log("EJEMPLO DE SET")
let a = new Set(['Azul']);  //Es posible inicializar el array con uno o más elementos establecidos
  a.add('Rojo');
  a.add('Negro');
  a.add('Rojo'); //pero si un valor ya existe, únicamente se cuenta 1 vez.
  a.add('Amarillo');
  a.add('Rosa');
  a.add('Café');
  a.add('Blanco')    

let arreglo = [...a] //Es posible tranformar un set en un array, ya que se puede recorrer como si fuera uno.
console.log(a) 
for (i = 0; i < 2; i++)
 {  if(i == 0){console.log('set antes de ser vaciado')}
    if(i == 1){console.log('set después de ser vaciado')}                                
    console.log(a.has('Rojo'));
    console.log(a.has('Negro'));
    console.log(a.has('Rojo'));
    console.log(a.has('Amarillo'));
    console.log(a.has('Rosa'));
    console.log(a.has('Café'));
    console.log(a.has('Blanco'),"\n");   
    a.clear(); //Es posible la eliminación de valores, pero como plus, un set se puede vaciar por completo en un paso.
 }

 
