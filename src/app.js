/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#generated-domains").innerHTML = generateDomain();
  });
};
const generateDomain = () => {
  let pronouns = ["the", "our", "your"];
  let adjs = ["great", "big", "peculiar", "amazing"];
  let nouns = ["strawberry", "pineapple", "checkerboard", "hippopotamus"];
  let dominios = [".net", ".com", ".dev"];
  let final = "";
  pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
      nouns.forEach(noun => {
        dominios.forEach(dominio => {
          final += pronoun + adj + noun + dominio + ",";
        });
      });
    });
  });
  let finalArr = final.split(",");
  let finalArrindex = Math.floor(Math.random() * finalArr.length);
  // let pronounindex = Math.floor(Math.random() * pronoun.length);
  // let adjindex = Math.floor(Math.random() * adj.length);
  // return ( pronoun[pronounindex] + adj[adjindex] + noun[nounindex] + ".com");

  return finalArr[finalArrindex];
};
