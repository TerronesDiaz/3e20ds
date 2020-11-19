var b = 1;
var c = 2
for (let i = 0; i < 6; i++) {
    if(i == 0){
  console.log(2)    
    }else if (i == 1) {
  console.log(1)      
    } else {
        c = c + b;
        console.log(c)
        b = c + b;
        console.log(b)  
    }
}