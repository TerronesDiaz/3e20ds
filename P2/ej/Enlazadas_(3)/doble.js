//Se crea la clase Nodo
class Nodo {
  //Se agregan los atributos de la clase en el cosntructor
  constructor(datos, siguiente, anterior) {
    //almacena valores
    this.datos = datos;
    //conectar al siguiente nodo
    this.siguiente = siguiente;
    //conectar al nodo anterior
    this.anterior = anterior;
  }
}
//Se crea la clase donde se agregarán los nodos
class ListaDobleEnlace {
  constructor() {
    //Principio de la lista
    this.cabeza = null;
    //Final de la lista
    this.cola = null;
    //Tamaño de la lista
    this.tamaño = 0;
  }
  //Método para añadir nodos al inicio
  añadirCabeza(datos) {
    const newNode = new Nodo(datos, this.cabeza, null);
    //si existe una cabeza, se recorre a la posición siguiente
    if (this.cabeza) {
      newNode.siguiente = this.cabeza;
      this.cabeza.anterior = newNode;
      this.cabeza = newNode;
      //Si no existe una cabeza, se posiciona al inicio.
    } else {
      this.cabeza = newNode;
      this.cola = newNode;
    }
    this.tamaño++; //aumenta el tamaño de la lista
  }
  //Método para añadir nodos al final de la lista
  añadirCola(datos) {
    //Nueva instancia de Nodo
    const newNode = new Nodo(datos, null, this.tail);
    //Si ya existe una cola, se posiciona después de ella
    if (this.cola) {
      newNode.anterior = this.cola;
      this.cola.siguiente = newNode;
      this.cola = newNode;
      //Si no existe una cola, solo se crea.
    } else {
      this.cola = newNode;
      this.cabeza = newNode;
    }
    //Aumenta el tamaño de la lista
    this.tamaño++;
  }
  //Método para imprimir la lista
  imprimir() {
    let actual = this.cabeza;
    //Se coloca un espacio para no amontonar al agregar nodos
    let resultado = "";
    //Siempre que exista otro nodo o el final cerca, se usara el simbolo.
    while (actual) {
      resultado += actual.datos + " <-> "; //simbolo
      actual = actual.siguiente;
    }
    //cuando no exista otro nodo en la cola, se pondrá una X
    return (resultado += "X");
  }
  //Función para acceder a la lista desde la cola hasta la cabeza.
  impresionInversa() {
    let actual = this.cola;
    //Se coloca un espacio para no amontonar al agregar nodos
    let resultado = "";
    //Siempre que exista otro nodo o el final cerca, se usara el simbolo.
    while (actual) {
      resultado += actual.datos + " <-> "; //simbolo
      actual = actual.anterior;
    }
    //cuando no exista otro nodo en la cabeza, se pondrá una X
    return (resultado += "X");
  }
}
//Instancia de la lista doblmente enlazada.
const ListaDoble = new ListaDobleEnlace();
//añadir valores a la cabeza
ListaDoble.añadirCabeza(2);
ListaDoble.añadirCabeza(1);
ListaDoble.añadirCabeza(7);
ListaDoble.añadirCabeza(11);
//añadir valores a la cola
ListaDoble.añadirCola(3);
ListaDoble.añadirCola(12);

//Imprimir la lista
console.log("impresión normal: " + ListaDoble.imprimir());
//Imprimir inversamente la cola
console.log("impresión inversa: " + ListaDoble.impresionInversa());
