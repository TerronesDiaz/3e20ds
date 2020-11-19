var numero = 9
let x = 0, y = 1;
var z = 2 ;
var t ;
console.log(x);
console.log(y);
while(z++ <= numero){
    var t = x+y ;
    x = y ;
    y = t;
    console.log(t);
}