var tela = 0;
var fundo;
var fundo2;
var balao;
var pikachu;
var pikachuobra;
var bulbasaur;
var squirtle;
var voltar;
var wasd;
var psyduck;
var rick;
var snorlax;
var gengar;
var charmander;
var fontepop;
var fonte2p;
var chao;
var ceu;
var porta;
var plataforma;
var bullba;
var venusaur;
var personagem;


function preload(){
  fundo = loadImage("imagensfase1/fundo.png");
  fundo2 = loadImage("imagensfase1/fundo2.png");
  fontepop = loadFont("fontes/fontpop.ttf");
  fonte2p = loadFont("fontes/font2p.ttf")
  balao = loadImage("imagensfase1/balao.png");
  pikachu = loadImage("imagensfase1/pikachu.png");
  pikachuobra = loadImage("imagensfase1/pikachuobra.png");
  bulbasaur = loadImage("imagensfase1/bulbasaur.png");
  squirtle = loadImage("imagensfase1/squirtle.png");
  voltar = loadImage("imagensfase1/voltar.png");
  wasd = loadImage("imagensfase1/w.jpg");
  psyduck = loadImage("imagensfase1/psyduck.png");
  rick = loadImage("imagensfase1/rickzin.png")
  snorlax = loadImage("imagensfase1/snorlax.png");
  gengar = loadImage("imagensfase1/gengar.png");
  charmander = loadImage("imagensfase1/charmander.png");
  
  //IMAGENS FASE1
  ceu = loadImage("imagensfase1/ceu.png");
  chao = loadImage("imagensfase1/chao.png");
  porta = loadImage("imagensfase1/porta.png");
  plataforma = loadImage("imagensfase1/plataforma.png");
  bullba = loadImage("imagensfase1/bullba.png");
  venusaur = loadImage("imagensfase1/venusaur.png");
  CHARIMG = loadImage(CHAR_IDLE_IMG_PATH);


}


function setup() {
  
  createCanvas(900, 700);
  
  textFont(fontepop);
  
}

function draw() {
  
  if(tela == 0){//INICIO DO MENU 0
    background(fundo);
    
    fill("#fff");
    rect(780, 15, 100, 80,20)
    var mouse = `X: ${mouseX}\nY: ${mouseY}`;
    fill(0);
    stroke(0);
    textSize(25);
    text(mouse, 800, 45); //POSIÇÃO DO MOUSE
    
    
    if (mouseX > 200 && mouseX < 700 && mouseY > 300 && mouseY < 380){// BOTÃO JOGAR
      fill("#A9A9A9")
      rect(200, 300, 500, 80, 20);
      image (pikachu, 620, 205, 100, 100)
    }else{
      fill("#fff")
      rect(200, 300, 500, 80, 20);
    }
    
    
    if (mouseX > 200 && mouseX < 700 && mouseY > 410 && mouseY < 490){//BOTÃO CONTROLES
      fill ("#A9A9A9");
      rect(200, 410, 500, 80, 20);
      image(bulbasaur, 620, 320, 100, 100 );
      
    }else{
      fill("#fff")
      rect(200, 410, 500, 80, 20);
    }

    if(mouseX > 200 && mouseX < 700 && mouseY > 520 && mouseY < 600){//BOTÃO CRÉDITOS
      fill("#A9A9A9");
      rect(200, 520, 500, 80, 20);
      image(squirtle, 630, 420, 120, 120 )
      
       }else{
         fill("#fff")
         rect(200, 520, 500, 80, 20);
       }
    
    fill(0);
    textSize(65);
    stroke(0);
    textFont(fontepop)
    text("JOGAR", 345, 360)
    text("CONTROLES", 260, 470)
    text("CRÉDITOS", 290, 585)
    
    
  }//FIM DO MENU 0
  if(tela == 1){//INICIO JOGAR 1
    
    drawfase1()
    
   }//FIM JOGAR 1
  if(tela == 2){//INICIO TELA 2
    background(fundo2);
    
    fill("#fff");
    rect(780, 15, 100, 80,20)
    var mouse = `X: ${mouseX}\nY: ${mouseY}`;
    fill(0);
    stroke(0);
    textSize(25);
    text(mouse, 800, 45); //POSIÇÃO DO MOUSE
    
    if(mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTAO VOLTAR
      
      fill("#A9A9A9");
      rect(36, 36, 150, 50, 10);

      fill(0);
      textSize(30);
      text("VOLTAR", 52, 70 );

      image(voltar, -40, -39, 450, 250)

    }else{
      
      fill("#fff")
      rect(36, 36, 150, 50, 10);//CAIXA VOLTAR
      
      fill(0);
      textSize(30);
      text("VOLTAR", 52, 70 );
      
    }//FIM DO BOTÃO VOLTAR
    
    
    fill("#fff");
    rect(100, 250, 700, 350, 20);//CAIXA DOS CONTROLES
    
    image(wasd, 470, 290, 300, 300)//TECLAS DE CONTROLE
    
    fill(0);
    textSize(40);
    stroke(0);
    text("USE AS SEGUINTES TECLAS PARA MOVIMENTAR O SEU PERSONAGEM", 120, 300, 400 )
    
    image(psyduck, 630, 60, 150, 200)
    
    
    
  }//FIM TELA 2
  if(tela == 3){//INICIO TELA 3
    background(fundo2);
    fill("#fff");
    rect(780, 15, 100, 80,20)
    var mouse = `X: ${mouseX}\nY: ${mouseY}`;
    fill(0);
    stroke(0);
    textSize(25);
    textFont(fontepop);
    text(mouse, 800, 45); //POSIÇÃO DO MOUSE
    
    if(mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTAO VOLTAR
      
      fill("#A9A9A9");
      rect(36, 36, 150, 50, 10);
      
      fill(0);
      textSize(30);
      text("VOLTAR", 52, 70 );
      
      image(voltar, -40, -39, 450, 250)
      
    }else{
      
      fill("#fff")
      rect(36, 36, 150, 50, 10);//CAIXA VOLTAR
      
      fill(0);
      textSize(30);
      text("VOLTAR", 52, 70 );
      
    }//FIM DO BOTÃO VOLTAR
    
    
    image(rick, -76, -150, 1054, 600)
    
    fill("#fff");
    rect(100, 290, 700, 110, 20);//CAIXA DOS CREDITOS
    
    fill(0);
    textFont(fonte2p)
    noStroke();
    textSize(15);
    text("Olá, sou Luis Henrique, estudante de Ciências e Tecnologia na Universidade Federal do Rio Grande do Norte. Espero que se divirta jogando na mesma intensidade que eu me diverti desenvolvendo!!! :D", 110, 320, 700)//TEXTO DOS CRÉDITOS
    
    image(gengar, 60, 150, 150, 150);
    image(charmander, 650, 155, 150, 150);
    
    fill("#fff");
    stroke(0);
    rect(100, 420, 700, 100, 20)//CAIXA IDEIA DO JOGO
    
    fill(0);
    noStroke();
    textSize(15)
    text("SAVE POKÉMONS é um jogo de plataforma onde você precisará saltar sobre o tipo de número que o nível pedir para manter seus pokémons à salvo.", 110, 450, 700 )//TEXTO EMAIL/CONTATO
    
    fill("#fff");
    stroke(0);
    rect(100, 540, 530, 40, 20);//CAIXA EMAIL/CONTATO
    
    fill(0);
    textSize(15);
    noStroke();
    text("EMAIL: luis.santos.131@ufrn.edu.br", 110, 570, 600 )//TEXTO EMAIL/CONTATO
    
    fill("#fff");
    stroke(0);
    rect (100, 600, 495, 40, 20);//CAIXA PROFESSOR
    
    fill(0);
    textSize(15)
    noStroke();
    text("PROFESSOR: Thales Aguiar de Lima", 110, 630, 500 )//TEXTO PROFESSOR
    
    image(snorlax, 580, 460, 300, 300)
    
    
  }//FIM TELA 3
}

function mouseClicked(){//INICIO MOUSECLICKED
  
  if (tela == 0){//INICIO TELA 0
    
    if(mouseX > 200 && mouseX < 700 && mouseY > 300 && mouseY < 380){//INICIO BOTÃO JOGAR
      
      tela = 1;
      
    }//FIM BOTÃO JOGAR
    
    if (mouseX > 200 && mouseX < 700 && mouseY > 410 && mouseY < 490){//INICIO BOTÃO CONTROLES
      
      tela = 2;
      
    }//FIM BOTÃO CONTROLES
    
    if (mouseX > 200 && mouseX < 700 && mouseY > 520 && mouseY < 600){//INICIO BOTÃO CRÉDITOS
      
      tela = 3;
      
    }//FIM BOTÃO CRÉDITOS
    
  }//FIM TELA 0
  
  if(tela == 1){//INICIO TELA 1
    
    if (mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTÃO VOLTAR
      
      tela=0;
      
    }//FIM BOTÃO VOLTAR

    if(mouseX > 35 && mouseX < 135  && mouseY > 35 && mouseY < 65){
      tela = 0
    }
    
  }// FIM TELA 1
  
  if(tela == 2){//INICIO TELA 2
    
    if (mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTÃO VOLTAR
      
      tela=0;
      
    }//FIM BOTÃO VOLTAR
    
  }//FIM TELA 2
  
  if(tela == 3){//INICIO TELA 3
    
    if (mouseX > 36 && mouseX < 186 && mouseY > 36 && mouseY < 86){//INICIO BOTÃO VOLTAR
      
      tela=0;
      
    }//FIM BOTÃO VOLTAR
    
  }//FIM TELA 3
  
}//FIM MOUSECLICKED