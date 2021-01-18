//Función para crear Pilas, cons sus respectivos atributos
function Pila() {
  this.data = [];
  this.top = 0;
}
/*almacena element en nuestro array en la última posición 
y después incrementa this.top (usando el operador ++ */
Pila.prototype.push = function (element) {
  this.data[this.top++] = element;
};
//retorna el último elemento de la pila y “decrementa” this.top
Pila.prototype.pop = function () {
  return this.data[--this.top];
};
//ver el tamaño o longitud de nuestra Pila
Pila.prototype.length = function () {
  return this.top;
};
//convierte cualquier número (en notación decimal) en su representación en otra base
function convertirBase(num, base) {
  var s = new Pila();
  do {
    s.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);
  var converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}
//variable en la que almaceno el número decimal y la base a la que se va a convertir.
let numero = [250,2];
console.log(`El número ${numero[0]} decimal convertido a binario es ${convertirBase(numero[0],numero[1])}`)