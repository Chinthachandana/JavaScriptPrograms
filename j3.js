function formula(){
   let a=document.getElementById("a1").value
   let b=document.getElementById("a2").value
   let result=eval((a*a)+(b*b)+(2*a*b))
   document.getElementById("a4").innerHTML=result
}