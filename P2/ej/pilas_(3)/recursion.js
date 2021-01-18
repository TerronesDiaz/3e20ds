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
//Función para sacar factorial haciendo uso de una Pila
function fact(n) {
  var s = new Pila();
  var product = 1;
  while (n > 1) {
    s.push(n--);
  }
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}
//Creé una variable para guardar el número que voy a utilizar
let numero = 8;
//Mando a consola el resultado
console.log(`El factorial de ${numero} haciendo uso de Pilas recursivas es ${fact(numero)}`)
