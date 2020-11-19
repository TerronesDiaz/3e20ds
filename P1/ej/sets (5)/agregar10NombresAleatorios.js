function nombresAleatorios()
{
 let nombresAleatorios = new Set();
 var texto = ""; 
 var consonantes = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; 
 var vocales = "AEIOU";
 for(i = 0; i < 10;i++)
 {  
    let longitud = Math.round(Math.random()*6);
    if (longitud < 2) longitud = 2;
 for (var j = 0; j < longitud; j++) 
  {
     texto += consonantes.charAt(Math.floor(Math.random()* consonantes.length));
     texto += vocales.charAt(Math.floor(Math.random()* vocales.length));
  } 
  nombresAleatorios.add(texto)
   texto = "";
}

  return nombresAleatorios;
}
console.log(nombresAleatorios())
