let showResult = document.getElementById("show-result");

showResult.addEventListener("click", function () {
  let firstInput = document.querySelector("#first-input").value;
  let secondInput = document.querySelector("#second-input").value;
  let firstResult= firstInput * secondInput;
  let secondResult= firstResult * (3/100);
  let pFirstResult=document.querySelector('.first-result');
  let pSecondResult=document.querySelector('.second-result');
  pFirstResult.innerHTML=firstResult;
  pSecondResult.innerHTML=secondResult;
  document.querySelector("#first-input").value="";
  document.querySelector("#second-input").value="";
});
