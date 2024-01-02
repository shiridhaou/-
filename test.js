//get Allelement html
var inputEle=document.getElementById("input")
var buttonEle=document.getElementById("btn")
var msgEle=document.getElementById("msg")

//Event الان يجب الضغط على الزر
//وماذا سيحدث ان ضغط الزر
buttonEle.onclick=function(){
     //get value from input
     var inputValue=inputEle.value;
     

      //put inputValue into
      msgEle.innerHTML=inputValue
      //اريد تفريغ input
      inputEle.value=""
 

 
 
  
}
