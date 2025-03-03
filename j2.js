function simpleinterest(){
   let p=document.getElementById("n1").value 
   let t=document.getElementById("n2").value 
   let r=document.getElementById("n3").value 
   let result=(p*t*r)/100
   document.getElementById("n5").innerHTML=result 
 
}