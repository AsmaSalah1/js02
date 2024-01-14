
var registerForm =document.querySelector(".registerForm");
registerForm.onsubmit= function(e){
e.preventDefault();
var element=e.target.elements;
// document.querySelector(".amount")
 console.log(e.target.elements);
 var inputOne =element['amount'].value;
var selector=element['exchange'].value;
//dollar
if(selector=='dollar')
document.querySelector(".result").textContent=inputOne/3.5;
else if (selector=='dinar')
document.querySelector(".result").textContent=inputOne/5;
else
document.querySelector(".result").textContent=inputOne;


}
