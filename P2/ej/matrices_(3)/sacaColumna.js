class numeros {
  // se crea la clase en la que vamos a almacenar la matriz
  constructor(n1, n2, n3, n4, n5) {
    //se crea el costructor con sus respectivos atributos
    this.n1 = n1; //atributo
    this.n2 = n2; //atributo
    this.n3 = n3; //atributo
    this.n4 = n4; //atributo
    this.n5 = n5; //atributo
  }
  sacaColumna(
    posicion,
    cantidad //Método para sacar la primera columna
  ) {
    this.n1.splice(posicion, cantidad); //se elimina el o los elemento según la posición y cantidad seleccionada
    this.n2.splice(posicion, cantidad); //se elimina el o los elemento según la posición y cantidad seleccionada
    this.n3.splice(posicion, cantidad); //se elimina el o los elemento según la posición y cantidad seleccionada
    this.n4.splice(posicion, cantidad); //se elimina el o los elemento según la posición y cantidad seleccionada
    this.n5.splice(posicion, cantidad); //se elimina el o los elemento según la posición y cantidad seleccionada
    console.log("Matríz con 1 Columna eliminada: ");
    console.log(matrizToMod); //se meustra la matriz después de los cambios
  }
}
let matrizOrigi = new numeros( //se crea la matriz
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 0]
);
console.log("Matríz original: ");
console.log(matrizOrigi); //se meustra la matriz antes de los cambios
let matrizToMod = new numeros( //Creé una matriz idéntica para modificarla y no afectar la original
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 0]
);
matrizToMod.sacaColumna(0, 1); //se manda a llamar al método.
