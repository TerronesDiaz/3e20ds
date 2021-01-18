//Se crea la clase Nodo
class Nodo {
  //Se agregan los atributos de la clase en el constructor
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
    return (resultado);
  }


  eliminarCabeza() {
    if (!this.cabeza) {
        return null
    };

    const valueToReturn = this.cabeza.datos;

    if (this.cabeza === this.cola) {
        this.cabeza = null;
        this.cola = null;
    } else {
        this.cabeza = this.cabeza.siguiente;
        this.cabeza.anterior = null;
    };
    this.tamaño--;
    return valueToReturn;
}

eliminarCola() {
    if (!this.cola) {
        return null
    };

    const valueToReturn = this.cola.datos;

    if (this.cabeza === this.cola) {
        this.cabeza = null;
        this.cola = null;
    } else {
        this.cola = this.cola.anterior;
        this.cola.siguiente = null;
    };
    this.tamaño--;
    return valueToReturn;
};

  removeVertex(datos) {
    let actual = this.cabeza;
    let anterior = null;

    while(actual !== null) {
        if (actual.datos === datos) {
            if (!anterior) {
                this.eliminarCabeza();
            } else if (!actual.siguiente) {
                this.eliminarCola();
            } else {
                anterior.siguiente = actual.siguiente;
                actual.siguiente.anterior = anterior;
            };
            this.tamaño--;
            return actual.datos;
        };
        anterior = actual;
        actual = actual.siguiente;
    };
    return null;
}

getSize() {
  return this.tamaño;
};
}
//Instancia de la lista doblmente enlazada.
const ListaDoble = new ListaDobleEnlace();
//añadir valores a la cabeza
ListaDoble.añadirCabeza(0);
ListaDoble.añadirCabeza(7);
ListaDoble.añadirCabeza(2);
ListaDoble.añadirCabeza(6);
//añadir valores a la cola
ListaDoble.añadirCola(1);
ListaDoble.añadirCola(2);
ListaDoble.añadirCola(9);
ListaDoble.añadirCola(5);
console.log(`El tamaño de la lista: ${ListaDoble.imprimir()} \n Es ${ListaDoble.getSize()}`);
console.log(`Eliminamos el nodo con el valor: ${ListaDoble.removeVertex(1)} y ${ListaDoble.removeVertex(7)}`)
console.log(`Ahora, el nuevo tamaño de la lista: ${ListaDoble.imprimir()} \n Es ${ListaDoble.getSize()}`);
