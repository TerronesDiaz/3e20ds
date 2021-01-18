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
  sacaFila(
    posicion //Método para sacar la primera Fila
  ) {
    switch (
      posicion //Se verifica que fila del array se quiere eliminar
    ) {
      case 0:
        this.n1.splice(posicion, 3); //se usa splice para eliminar la fila de la posición deseada
        break;
      case 1:
        this.n2.splice(posicion, 3); //se usa splice para eliminar la fila de la posición deseada
        break;
      case 2:
        this.n3.splice(posicion, 3); //se usa splice para eliminar la fila de la posición deseada
        break;
      case 3:
        this.n4.splice(posicion, 3); //se usa splice para eliminar la fila de la posición deseada
        break;
      case 4:
        this.n5.splice(posicion, 3); //se usa splice para eliminar la fila de la posición deseada
        break;
      default:
        console.log("No existe la fila a eliminar ");
        break;
    }
    console.log("Matríz con 1 fila eliminada: ");
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
let matrizToMod = new numeros(
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 0]
); //Creé una matriz idéntica para modificarla
matrizToMod.sacaFila(0); //se manda a llamar al método para sacar la fila.
