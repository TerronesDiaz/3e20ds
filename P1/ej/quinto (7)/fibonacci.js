var numero = 4
let x = 0, y = 1;
var z = 2 ;
var t ;
while(z++ <= numero){
    var t = x+y ;
    x = y ;
    y = t;
}
console.log(t);
//0,1,1,2,->3<-