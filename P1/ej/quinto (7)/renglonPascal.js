let n=5; 
var miArray= new Array(n);  
for (var i=1;i<=n;i++) 
{  
 miArray[i] = new Array(n);  
}  
for(i=1;i<=n;i++)  
 for(j=1;j<=i;j++)
 { 
  miArray[i][j]=combina(i-1,j-1);  
 }  
console.log("El quinto renglón del triangulo de pascal es : ")

for(i=1;i<=n;i++)
{  
 for(j=1;j<=i;j++)
 {  
  if (i == 5 )
  {
    console.log(miArray[i][j]);   
  } 
}      
}  
 
function combina(p,q)
{  
 return  Math.round(fact(p)/(fact(q)*fact(p-q)));   
}  

function fact(h)
{  
 var x=1;  
 if (h!==0)
 {  
  for (y=1;y<=h;y++){  
   x*=y;  
  }  
 }  
 return x;  
}  