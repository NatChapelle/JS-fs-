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
const response = document.querySelector("p");

console.log(btn1, btn2, btn3);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.style.background = "red";
  response.classList.add("show-response");
});
btn3.addEventListener("click", () => {
  response.style.background = "red";
  response.classList.add("show-response");
});

//------------------------------------------------------------
// mouse events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%) ";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%) ";
  mousemove.style.border = "2px solid green";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// -----------------------------------------
// keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.scr = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "n") {
    keypressContainer.style.background = "blue";
  } else if (e.key === "c") {
    keypressContainer.style.background = "yellow";
  } else {
    keypressContainer.style.background = "violet";
  }

  ring();
});

//-------------------------------
// scroll event

const nav = document.querySelector("nav");

window.addEventListener('scroll',() => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
})

//----------------------------------
// event sur input
const inputName = document.querySelector('input[type ="text"]');
const select = document.querySelector ("select");
const form = document.querySelector ("form");
let pseudo = "";
let language = "";


inputName.addEventListener('input', (e)=> {
  pseudo = e.target.value;
  console.log(pseudo);
});
select.addEventListener('input', (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e)=> {
  e.preventDefault();//annule le chgnt de page par defaut
  
  if (cgv.checked)//inutile declarer la const, pour les checkboxes, elles st automatiquement reconnues via id; idem pr les boutons avc id
{
  //afficher le contenu des variables
  document.querySelector("form > div").innerHTML = ` 
  <h3>Pseudo: ${pseudo} </h3>
  <h4> Langage préféré : ${language} </h4>
  `;
} else {
  alert("Veuillez accepter les CGV")
}
})

//-------------------------------
// load event se declenche 1X que la page a été chargée
window.addEventListener('load', () => {
 console.log("document chargé !");
});
//-------------------------------
//for each

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//-----------------------------------
// addEventListener vs onclick
// document.body.onclick = () => {
//     console.log("click!!");
// };

//bubbling => fin .de base eventListener est paramétré en mode bubbling
document.body.addEventListener("click", () => {
  console.log("click 1 !");
}, false);//de base bubbling est sur false

//usecapture
document.body.addEventListener("click", () => {
  console.log("click 2 !");
}, true);

//---------------------------------
// stop Propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("test !");
//   e.stopPropagation();//pr eviter qu1 element ecrase un autre
// });

//removeEventListener

//-----------------------------------
// le BOM browser object model
//les evenemenst adossés à window 
// alert("hello !");

//confirm
btn2.addEventListener('click', () => {
confirm("Voulez-vous vraiment vous tromper ?");
});

//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("entrez votre nom !");
  questionContainer.innerHTML += "<h3> bravo "+ answer + "</h3>";
});//ici le += permet de mettre le h3 à la suite sans ecraser le reste du texte