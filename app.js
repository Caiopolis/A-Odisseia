
function abrir(){
  let menu_mobile = document.getElementById("menu-mobile");
  menu_mobile.classList.add("abrir")
}
function fechar(){
  let menu_mobile = document.getElementById("menu-mobile");
  menu_mobile.classList.remove("abrir")
}
function fechar_overlay(){
  let menu_mobile = document.getElementById("menu-mobile");
  menu_mobile.classList.remove("abrir")
}

function enviar_resposta() {
  let resposta = document.getElementById("resposta").value.trim().toLowerCase();
  const respostaCorreta = "ninguem";

  if (resposta === respostaCorreta) {
    window.location.href = "enigma2.html";
  } else if(resposta === "ninguém"){
    window.location.href = "enigma2.html";
  }else {
    let resultado = document.getElementById("resultado");
    resultado.style.color = "rgb(255, 238, 5)";
    resultado.innerHTML =
      "Uma pena... A resposta esta incorreta. Mas como diria Atena, a sabedoria é a chave para desvendar mistérios.";
  }
}

function enviar_resposta_2() {
  let resposta_2 = document
    .getElementById("resposta")
    .value.trim()
    .toLowerCase();
  const respostaCorreta = "zagreu";

  if (resposta_2 === respostaCorreta) {
    window.location.href = "Agradecimento.html";
  } else {
    let resultado = document.getElementById("resultado");
    resultado.style.color = "rgb(255, 238, 5)";
    resultado.innerHTML =
      "Uma pena... A sabedoria de Atena não te favoreceu desta vez, e os ventos de Éolo não guiaram tua resposta...";
  }
}

