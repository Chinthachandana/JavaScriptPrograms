function average(){
   let n1=document.getElementById("t1").value
   let n2=document.getElementById("t2").value
   let n3=document.getElementById("t3").value
   let n4=document.getElementById("t4").value
   let n5=document.getElementById("t5").value
   let n6=document.getElementById("t6").value
   let avg=eval(n1)+eval(n2)+eval(n3)+eval(n4)+eval(n5)+eval(n6)
   document.getElementById("t7").innerHTML=avg

}