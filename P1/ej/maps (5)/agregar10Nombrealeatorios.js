function nAleatorios()
{
 let numeros = new Map();
 var text = ""; 
 var consonantes = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
 var vocales = "AEIOU"
 for(j = 0; j < 10;j++)
 {  
  longitud =  Math.round(Math.random()*6);
  if (longitud < 2)longitud = 2;  
 for (var i = 0; i < longitud; i++) 
  {
     text += consonantes.charAt(Math.floor(Math.random()* consonantes.length));
     text += vocales.charAt(Math.floor(Math.random()* vocales.length));
  } 
  if (j ==0 )numeros.set('Nombre1', text);
  else if (j ==1 )numeros.set('Nombre2', text)
  else if (j ==2 )numeros.set('Nombre3', text)
  else if (j ==3 )numeros.set('Nombre4', text)
  else if (j ==4 )numeros.set('Nombre5', text)
  else if (j ==5 )numeros.set('Nombre6', text)
  else if (j ==6 )numeros.set('Nombre7', text)
  else if (j ==7 )numeros.set('Nombre8', text)
  else if (j ==8 )numeros.set('Nombre9', text)
  else if (j ==9 )numeros.set('Nombre0', text);
   text = "";
}

  return numeros;
}
console.log(nAleatorios())