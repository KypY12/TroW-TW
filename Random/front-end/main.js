var btn1 = document.querySelector("#quickMenuButtons button:first-child");
var btn2 = document.querySelector("#quickMenuButtons button:nth-child(2)");
var btn3 = document.querySelector("#quickMenuButtons button:last-child");

var comp1 = document.querySelector("#quickMenuCompContainers div:first-child");
var comp2 = document.querySelector("#quickMenuCompContainers div:nth-child(2)");
var comp3 = document.querySelector("#quickMenuCompContainers div:last-child");

var prevComp = comp3;
var prevBtn = btn3;

function hideAllComp(){
    comp1.style.visibility = "hidden";
    comp2.style.visibility = "hidden";
    comp3.style.visibility = "hidden";
}

function changeCompToPT() {
    if(btn1 === prevBtn){
        return;
    }
    btn1.style.backgroundColor = "#92122e";
    comp1.style.visibility = "visible";
    prevBtn.style.backgroundColor = "#6c0e23";
    prevComp.style.visibility = "hidden";
    prevComp = comp1;
    prevBtn = btn1;
  }   
function changeCompToSP() {
    if(btn2 === prevBtn){
        return;
    }
    btn2.style.backgroundColor = "#92122e";
    comp2.style.visibility = "visible";
    prevBtn.style.backgroundColor = "#6c0e23";
    prevComp.style.visibility = "hidden";
    prevComp = comp2;
    prevBtn = btn2;

  }   
function changeCompToIT() {
    if(btn3 === prevBtn){
        return;
    }
    btn3.style.backgroundColor = "#92122e";
    comp3.style.visibility = "visible";
    prevBtn.style.backgroundColor = "#6c0e23";
    prevComp.style.visibility = "hidden";
    prevComp = comp3;
    prevBtn = btn3;

  }   

  
hideAllComp();
changeCompToPT();

btn1.addEventListener('click', changeCompToPT);
btn2.addEventListener('click', changeCompToSP);
btn3.addEventListener('click', changeCompToIT);