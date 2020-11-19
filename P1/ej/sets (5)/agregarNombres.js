let nombres = function ()
{
     let nombresAleatorios = new Set();
        nombresAleatorios.add('Juan')
                         .add('Pedro')
                         .add('Pancho')
                         .add('Josue')
                         .add('Lola')
                         .add('Alfonso')
                         .add('Renato');
       return    nombresAleatorios;     
}

console.log(nombres())