var component1 = {
  button: document.querySelector("#quickMenuButtons button:first-child"),
  container: document.querySelector("#quickMenuCompContainers div:first-child")
};

var component2 = {
  button: document.querySelector("#quickMenuButtons button:nth-child(2)"),
  container: document.querySelector("#quickMenuCompContainers div:nth-child(2)")
};

var component3 = {
  button: document.querySelector("#quickMenuButtons button:last-child"),
  container: document.querySelector("#quickMenuCompContainers div:last-child")
};


var prevComp = component1;

function init(){
    component1.container.style.opacity = "1";
    component1.button.style.backgroundColor = "#92122e";
    component2.container.style.opacity = "0";
    component3.container.style.opacity = "0";
}


var changeComp = function(component) {
  return function(event){
    if(component === prevComp){
      return;
    }

    component.button.style.backgroundColor = "#92122e";
    component.container.style.opacity = "1";
  
    prevComp.button.style.backgroundColor = "#6c0e23";
    prevComp.container.style.opacity = "0";
    
    prevComp = component;
  }
  
}

function hoverEffectIn(event){
   if(event.target !== prevComp.button){
     event.target.style.backgroundColor = "#81041f";
  }
}

function hoverEffectOut(event){
  if(event.target !== prevComp.button){
    event.target.style.backgroundColor = "#6c0e23";
  }
}


  
init();

component1.button.addEventListener('click', changeComp(component1));
component2.button.addEventListener('click', changeComp(component2));
component3.button.addEventListener('click', changeComp(component3));

component1.button.addEventListener("mouseover", hoverEffectIn);
component2.button.addEventListener("mouseover", hoverEffectIn);
component3.button.addEventListener("mouseover", hoverEffectIn);

component1.button.addEventListener("mouseout", hoverEffectOut);
component2.button.addEventListener("mouseout", hoverEffectOut);
component3.button.addEventListener("mouseout", hoverEffectOut);

