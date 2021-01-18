// Se crea la clase de la cual se derivan los nodos
class Node {
  constructor(datos, siguiente) {
    this.datos = datos;
    this.siguiente = siguiente;
  }
}
//creación de la lista enlazada simple
class ListaEnalazadaSimp {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Función para agregar info. a la lista enlazada con parámetro
  añadir(datos) {
    //Instancia de la clase node
    const newNode = new Node(datos, null);
    //condición para saber si el nodo va a ser la cabeza o se va al final.
    if (!this.head) {
      this.head = newNode;
    } else {
      let actual = this.head;
      //mientras exista otro nodo se mueve por la lista.
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = newNode;
    }
    this.size++;
  }
}
//Se crea una nueva lista enlazada simple
const nuevaListaSimp = new ListaEnalazadaSimp();
//Le añado valores
nuevaListaSimp.añadir(1);
nuevaListaSimp.añadir(10);
nuevaListaSimp.añadir(100);
nuevaListaSimp.añadir(1000);
nuevaListaSimp.añadir(10000);
//Imprimo la lista en la consola
console.log(nuevaListaSimp);
