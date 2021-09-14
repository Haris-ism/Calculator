var calculation = document.querySelectorAll(".calculation")
var display = document.querySelectorAll(".display")[0]
var clear = document.querySelectorAll(".clear")[0]
var equals = document.querySelectorAll(".equals")[0]
for(i=0; i<calculation.length; i++){
  calculation[i].addEventListener("click",function (){
    display.value = display.value+this.value;
  });
  clear.addEventListener("click",function (){
    display.value = "";
  })
  equals.addEventListener("click",function (){
    display.value = eval(display.value)
  })
}
