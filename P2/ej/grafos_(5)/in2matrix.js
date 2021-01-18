// Creamos la clase con la que vamos a instanciar nodos
class Nodo{
    constructor(datos, siguiente){
        this.datos=datos;
        this.siguiente=siguiente;
    }
}
//Clase con la que vamos a crear listas enlazadas
class ListaEnlazada{
    constructor() {
        this.cabeza=null;
        this.tamaño=0;
    }

    add(datos){  //Metodo para agregar datos
        const newNode= new Nodo(datos,null); //  Creamos un nuevo nodo
        if(!this.cabeza){   // Verifica si la cabeza esta vacia es decir si no hay cabeza el nodo que introducimos es el primer elemento
            this.cabeza=newNode;
        }
        else{   // Del lado contrario si ya hay una cabeza es decir ya tenemos algun nodo metere al nodo al ultimo lugar
            let actual = this.cabeza; // Mantenemos registro del valor actual de la cabeza
            while(actual.siguiente){  // Mientras la cabeza tenga una referencia al siguiente nodo
                actual=actual.siguiente; //    Convertimos el valor actual de la cabeza al valor siguiente de la cabeza
            }
            actual.siguiente=newNode; // Al saber la posicion donde debemos poner el nuevo nodo lo creamos

        }
        this.tamaño++;
    }

    removeFrom(index){  //Metodo para retirar elemento conforme a un indice
        if (index < 0 || index > this.tamaño) return null;

        let actual = this.cabeza;
        let anterior = null;

        if(index === 0) actual = this.cabeza;
        else
        {
            for(let i = 0; i < index; i++)
            {
                anterior = actual;
                actual = actual.siguiente;
            }
            anterior = actual;
        }

        return actual.datos
    }
    getsize(){  //  Funcion para obtener el tamaño
        return this.tamaño;
    }
}

const linkedList = new ListaEnlazada();  // creamos nuestra lista enlazada
const matriz=[1,2,3];
console.log("Matriz que transformaremos a lista enlazada")
console.log(matriz);    // Imprimimos la matriz
for (let i = 0; i < matriz.length; i++){
    linkedList.add(matriz[i]);
}
console.log("Lista convertida a matriz:");
console.log(linkedList);