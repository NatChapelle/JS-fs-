// selecteurs
// document.querySelector("h4") .style.background = "yellow";

// const baliseHtml = document.querySelector ("h4");
// console.log(baliseHtml);
// baliseHtml.style.background = "green";

// click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const response = document.querySelector('p');


console.log(btn1, btn2, btn3);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  
  response.classList.add('show-response');
  response.style.background ="green";
});
btn2.addEventListener("click", () => {
    
    response.style.background ="red";
    response.classList.add('show-response');
  });
btn3.addEventListener("click", () => {
    
    response.style.background ="red";
    response.classList.add('show-response');
  });

//------------------------------------------------------------
// mouse events 
const mousemove = document.querySelector('.mousemove');

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%) ";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%) ";
  mousemove.style.border ="2px solid green";
});

questionContainer.addEventListener("mouseenter", ()=> {
  questionContainer.style.background ="rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
 questionContainer.style.background = "pink";});

response.addEventListener('mouseover', () => {
  response.style.transform = "rotate(2deg)";
})

// -----------------------------------------
