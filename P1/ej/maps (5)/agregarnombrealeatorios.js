let nombres = function ()
{
     let nombresAleatorios = new Map();
        nombresAleatorios.set('nombre1','Francisco')
                         .set('nombre2','Javier')
                         .set('nombre3','Lalo')
                         .set('nombre4','Pedro')
                         .set('nombre5','Rosa')
                         .set('nombre6','Juan')
                         .set('nombre7','Ricardo');
       return nombresAleatorios;     
}
console.log(nombres())