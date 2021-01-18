var torre1 = 1;
var torre2 = 2;
var torre3 = 3;
var n = 4; // Numero de discos
hanoi(n, torre1, torre3, torre2);

function hanoi(n, ori, des, aux)
{
 // El caso base es mover 1 disco desde la torre 1 a la torre 3
 if(n == 1)
  console.log("Mueva el disco " + n + " desde la Torre " + ori + " hasta la Torre " + des);
 else
 {
  // Se mueven n-1 discos de ori a aux
  hanoi(n - 1, ori, aux, des);
  console.log("Mueva el disco " + n + " desde la Torre " + ori + " hasta la Torre " + des);
  // Se mueven n-1 discos de aux a des
  hanoi(n - 1, aux, des, ori);
 }
}


