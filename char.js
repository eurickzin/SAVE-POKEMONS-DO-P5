const falling = "falling";
const jumping = "jumping";
const idle = "idle";

var state = idle;
var charX = 30;
var chaoY = 580;
var charY = chaoY;
var charSpeed = 5;
var jumpSpeed = 5;
var fallingSpeed = 5;
var jMax = 150;

var personagem;


function drawCharacter() {
  image(personagem, charX, charY, 50, 50);
  jump();
  moveCharacter();
}

function moveCharacter() {
  if (keyIsDown(68)) { // tecla 'D'
    charX += charSpeed;
  }
  if (keyIsDown(65)) { // tecla 'A'
    charX -= charSpeed;
  }
}

function jumpPressed() {
  if (state == idle) {
    state = jumping;
  }
}

function keyPressed() {
  if (key === ' ' || keyCode === 32) { // tecla 'Espaço'
    jumpPressed();
  }
}

function jump() {

  if (state === jumping) {
      charY -= jumpSpeed
      }
  
  if(state == idle && charY <= 470){
   chaoY = charY
 }
  
  if(Math.abs(charY - chaoY) >= jMax) {
      state = falling
    }

  if(state === falling) {
    charY += fallingSpeed
  }

  if(charY == chaoY) {
    state = idle
  }

}
