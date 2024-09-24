let inputs=document.querySelector(".input");
let buttons=document.querySelectorAll(".button");
let specialcharacter =["+", "-", "/", "*","="];
let equal =document.getElementById("equal")
let answer = "";


function calculate(bvalue){
 if(bvalue==="="&& answer !== ""){
     answer = eval(output.replace("%","/100"))
 }
 
          else{
 if(answer === "" && specialcharacter.includes(bvalue))return;
 answer+=bvalue;
 }
// let x=answer

inpu=(answer);
var a=eval(inputs.value=inpu)
console.log(a)
// function equall(){
//     inputs.value +=a
//     console.log("hii")
//  }
let equal =document.getElementById("equall")
equal.addEventListener("click",()=>{
    if(inputs.value !=""){
    inputs.value=a
    }

        
    
})
}


buttons.forEach((button)=>{
    button.addEventListener("click",(e)=> calculate(e.target.value))
})
// console.log(inputs.value)
function cl(){
    answer=""
}
function dlt(){
    answer=inputs.value.slice(0,-1)
}





















































































