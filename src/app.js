/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // generador de excusa
  let who = ["El policia", "Mi padre", "El Mesero", "Mi dinosaurio"];
  let action = ["uso", "lanzo", "tiro", "reutilizo"];
  let what = ["el taser", "el celular", "la comida"];
  let when = [
    "con el vecino",
    "cuando estaba en la piscina",
    "durante la cabalgata",
    "despues de mi clase",
    "mientras salia a correr"
  ];

  function obtenerElementoAleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
  }
  console.log(` 
    ${obtenerElementoAleatorio(who)} ${obtenerElementoAleatorio(
    action
  )} ${obtenerElementoAleatorio(what)} ${obtenerElementoAleatorio(when)}
  `);

  let parrafoExcusa = document.getElementById("excusa");
  parrafoExcusa.innerText = `${obtenerElementoAleatorio(
    who
  )} ${obtenerElementoAleatorio(action)} ${obtenerElementoAleatorio(
    what
  )} ${obtenerElementoAleatorio(when)}`;
  console.log(parrafoExcusa);
};
