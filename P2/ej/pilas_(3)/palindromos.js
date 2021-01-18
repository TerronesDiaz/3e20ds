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
//Función para evaluar palabras y saber si son palíndromos o no
function esPalindromo(palabra) {
  let s = new Pila();
  for (var i = 0; i < palabra.length; ++i) {
    s.push(palabra[i]);
  }
  let rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  return palabra === rword;
}
//Creé una variable para la palabra.
let Palabra = 'sometemos'
console.log(`La palabra "${Palabra}" es un palindromo? ${esPalindromo(Palabra)}`)