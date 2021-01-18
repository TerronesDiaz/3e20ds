//Clase para la creación de nodos
class Nodo {
  //atributos de los nodos
  constructor(datos, siguiente) {
    this.datos = datos; 
    this.siguiente = siguiente; 
  }
}
//Clase para la creación de una lista
class listaEnlazada {
  constructor() {
    this.cabeza = null;
    this.tamaño = 0;
  }
  //Función para agregar datos a la lista
  agregar(datos) {
    //Se crea un nuevo nodo
    let nuevoNodo = new Nodo(datos, null);
    //Condición para saber si la cabeza ya existe
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }
    this.tamaño++;
  }
  //Función para obtener el tamaño de la lista
  getSize() {
    return this.tamaño;
  }
  //Función para remover haciendo uso del index
  removeFrom(index) {
    if (index < 0 || index > this.tamaño) return null;

    let current = this.cabeza;
    let previous = null;

    if (index === 0) current = this.cabeza;
    else {
      //Se hace uso de un for para recorrer la lista hasta encontrar el index
      for (
        let i = 0;
        i < index;
        i++ 
      ) {
        previous = current;
        current = current.siguiente;
      }
      previous = current;
    }
    //La función arroja los datos actuales.
    return current.datos;
  }

  imprimir() {
    //Si la lista está vacía se retorna null
    if (!this.tamaño) return null;
    let current = this.cabeza;
    let result = "";
    while (current) {
      result += current.datos += " -> ";
      current = current.siguiente;
    }
    result += "x";
    return result;
  }
}
//Se crea una nueva lista a partir de la clase ListaEnlazada
let lista = new listaEnlazada();
lista.agregar(31);
lista.agregar(82);
lista.agregar(33);
lista.agregar(43);
lista.agregar(52);
lista.agregar(30);
lista.agregar(12);
lista.agregar(11);
lista.agregar(1);
lista.agregar(19);
//Se crea una nueva lista a partir de la clase matriz
class matriz {
  constructor() {}
  //Función para convertir la lista a una matríz
  in2list(matriz, size, matrizB) {
    for (let i = 0; i < size; i++) {
      matriz[i] = lista.removeFrom(i);
      matrizB[i] = matriz[i];
    }
  }
}
let matrix = new matriz();
let matrizB = [];
matrix.in2list(matrizB, lista.getSize(), matrizB);

console.log(`La lista, ${lista.imprimir()} \nSe convirtió en una matriz: `);
console.log(matrizB);
