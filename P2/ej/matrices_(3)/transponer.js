class numeros {
  constructor(n1, n2, n3, n4) {
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
    this.n4 = n4;
  }
  transponer() {
    let temp1 = [];
    let temp2 = [];
    let temp3 = [];
    let temp4 = [];
    temp1[0] = this.n1[0];
    temp1[1] = this.n2[0];
    temp1[2] = this.n3[0];
    temp1[3] = this.n4[0];

    temp2[0] = this.n1[1];
    temp2[1] = this.n2[1];
    temp2[2] = this.n3[1];
    temp2[3] = this.n4[1];

    temp3[0] = this.n1[2];
    temp3[1] = this.n2[2];
    temp3[2] = this.n3[2];
    temp3[3] = this.n4[2];

    temp4[0] = this.n1[3];
    temp4[1] = this.n2[3];
    temp4[2] = this.n3[3];
    temp4[3] = this.n4[3];

    this.n1 = temp1;
    this.n2 = temp2;
    this.n3 = temp3;
    this.n4 = temp4;
    console.log(matrizToMod);
  }
}
let matrizOrigi = new numeros( //se crea la matriz
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0]
);
console.log(matrizOrigi);

let matrizToMod = new numeros( //se crea la matriz
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0]
);
matrizToMod.transponer();
