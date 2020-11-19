//PARA PROBAR EL CODIGO SE DEBE RECARGAR PRIMERO LA PÁGINA
const FechaDehoy = new Date('November 2, 2020 10:00:00');
const i=-11;
const diaDeHoy = FechaDehoy.getDay();
const dia=diaDeHoy-i%7;
//PARA PROBAR EL CODIGO SE DEBE RECARGAR PRIMERO LA PÁGINA
switch (diaDeHoy) {
    case 0:
    console.log('El dia de hoy es Domingo '); 
        break;
    case 1:
    console.log('El dia de hoy es Lunes'); 
        break;
    case 2: 
    console.log('El dia de hoy es Martes');
        break;
    case 3:
    console.log('El dia de hoy es Miercoles ');
        break;
    case 4:
    console.log('El dia de hoy es Jueves ');
        break;
    case 5: 
    console.log('El dia de hoy es Vienes ');
        break;
    case 6:
    console.log('El dia de hoy es Sabado ');
        break;
    default:
    console.log('error')
    break;
}
if(dia==0){
    console.log('Hace 11 dias fue Domingo');
}
else if (dia==1){
    console.log('Hace 11 dias fue Lunes');
}
else if(dia==2){
    console.log('Hace 11 dias fue Martes');
}
else if(dia==3){
    console.log('Hace 11 dias fue Miercoles');
}
else if(dia==4){
    console.log('Hace 11 dias fue Jueves');
}
else if (dia==5){
    console.log('Hace 11 dias fue Viernes');
}
else if (dia==6){
    console.log('Hace 11 dias fue Sabado');
}
else{
    console.log('error')
}
//PARA PROBAR EL CODIGO SE DEBE RECARGAR PRIMERO LA PÁGINA
