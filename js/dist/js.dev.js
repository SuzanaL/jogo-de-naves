"use strict";

var speedGame = 1;

function start() {
  // Inicio da função start()
  $("#inicio").hide();
  $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
  $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
  $("#fundoGame").append("<div id='inimigo2'></div>");
  $("#fundoGame").append("<div id='amigo' class='anima3'></div>"); //Main variables of the game

  var jogo = {};
  var TECLA = {
    W: 87,
    S: 83,
    D: 68
  }; //create a new variable

  jogo.pressinou = []; //check if the user pressed any key

  $(document).keydown(function (e) {
    jogo.pressionou[e.which] = true;
  }); //there is no key pressed

  $(document).keyup(function (e) {
    jogo.pressionou[e.which] = false;
  }); //Game Loop
  //call function loop every 30 miliseconds

  jogo.timer = setInterval(loop, 30);

  function loop() {
    movefundo();
  } // Fim da função loop()
  //Função que movimenta o fundo do jogo


  function movefundo() {
    // the initial position is zero by default
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda - speedGame);
  } // fim da função movefundo()


  function movejogador() {
    if (jogo.pressionou[TECLA.W]) {
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", topo - 10);
    }

    if (jogo.pressionou[TECLA.S]) {
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", topo + 10);
    }

    if (jogo.pressionou[TECLA.D]) {//Chama função Disparo	
    }
  } // fim da função movejogador()

} // Fim da função start