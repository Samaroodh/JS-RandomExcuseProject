/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["My kids ", "My husband ", "My friend ", "My students "];
  let action = ["broke ", "hid ", "lost ", "took "];
  let what = ["my laptop ", "the car ", "my glasses "];
  let when = ["before class", "just now", "last night", "this morning"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] + action[actionIndex] + what[whatIndex] + when[whenIndex]
  );
};
