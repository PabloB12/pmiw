https://youtu.be/zawU3qROO14
let textos = [16];
let imagen = [18];
let estado;
let esquinaXcred = 20;
let esquinaYcred = 420;
let esquinaXcentro = 260;
let esquinaYcentro = 420;
let esquinaXno = 130;
let esquinaYno = 420;
let esquinaXsi = 390;
let esquinaYsi = 420;
let ancho = 160;
let alto = 40;
let font;
let tsX;
let tnX;
let tcX;
let tcrX;
let txY;
let song;

function preload() {
  imagen[1] = loadImage('data/inicio.PNG');
  imagen[2] = loadImage('data/final4.PNG');
  imagen[3] = loadImage('data/final2.PNG');
  imagen[4] = loadImage('data/final1.PNG');
  imagen[5] = loadImage('data/4.8.PNG');
  imagen[6] = loadImage('data/2.PNG');
  imagen[7] = loadImage('data/2.9.PNG');
  imagen[8] = loadImage('data/2.8.PNG');
  imagen[9] = loadImage('data/2.7.PNG');
  imagen[10] = loadImage('data/2.6.PNG');
  imagen[11] = loadImage('data/2.4.PNG');
  imagen[12] = loadImage('data/2.3.PNG');
  imagen[13] = loadImage('data/1.PNG');
  imagen[14] = loadImage('data/1.5.PNG');
  imagen[15] = loadImage('data/1.4.PNG');
  imagen[16] = loadImage('data/1.3.PNG');
  imagen[17] = loadImage('data/3.8.PNG');
  imagen[18] = loadImage('data/meme.PNG');
  imagen[19] = loadImage('data/meme2.PNG');
  
  font = loadFont('/data/Fuentes/KrabbyPatty.ttf');
  
  soundFormats('mp3', 'ogg');
  
  song = loadSound("/data/Musica/beach.mp3");
}

function setup() {
  createCanvas( 640, 480 );
  background( 200 );
  
  textFont(font);
  textSize( 30 );
  
  stroke(139, 10, 10); //rojo oscuro
  strokeWeight(4);
  
  estado = "menu";
  
  tsX = 450;
  txY = 450;
  tnX = 193;
  tcX = 270;
  tcrX = 40; 
  

  textos[1] = "Bob le da un regalo a calamardo";
  textos[2] = "Bob se pone a llorar y le hace un sueter\n con sus lagrimas...";
  textos[3] = "Calamardo se compadece y termina\n aceptandolo";
  textos[4] = "¿Le devuelve el favor?";
  textos[5] = "Bob se desanima pero de igual forma\n sigue con el trabajo";
  textos[6] = "Bob se alegra y le dice a Calamardo que\n espera su regalo";
  textos[7] = "Calamardo, de mala gana e incentivado\n por Don Cangrejo, va a buscar un regalo";
  textos[8] = "Le compra un pastel explosivo como\n regalo y Bob sin saberlo se lo come";
  textos[9] = "¿Le advierte?";
  textos[10] = "Al no advertirle, Calamardo espera a la\n tarde para que Bob explote y se\n deshaga de el";
  textos[11] = "Deciden pasar todo el dia haciendo cosas\n que Bob tenia anotado en su lista de\n mejores amigos";
  textos[12] = "Al atardecer llega la hora de despedirse\n pero Bob le dice que no se comio el pastel,\n por lo que lo saca para compartirlo con\n Calamardo, pero se tropieza y....";
  textos[13] = "Final Bueno";
  textos[14] = "Final Malo";
  textos[15] = "Final Canon";
  textos[16] = "Lo recibe?";
}

function draw() {
  
  print(mouseX, mouseY);
  
  song.setVolume(0.6);

  //Pantalla de inicio
  if (estado == "menu") {
    image( imagen[1], 0, 0, 640, 480 );
    stroke(139, 10, 10);  //rojo oscuro
    fill( 232, 240, 27 );
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    fill( 206, 75, 108 );
    rect( esquinaXcred, esquinaYcred, ancho, alto);
    textSize(40);
    stroke( 73, 32, 198 ); //azul
    fill( 232, 240, 27 ); //amarillo
    text('El Ultimo dia en Fondo de Bikini', 30, 400 );
    textSize(30);
    fill(191, 23, 174);
    stroke(216, 204, 250); //celeste
    text('Comenzar', tcX, txY);
    text('Creditos', tcrX, txY);
  }
  //pantalla de créditos
  if (estado == "creditos") {
    image( imagen[17], 0, 0, 640, 480 );
    stroke(216, 204, 250); //celeste
    fill( 73, 32, 198 ); //azul
    textSize(50);
    text('Hecho por:', 30, 60);
    textSize(30);
    fill( 0, 113, 4 ); //verde
    text('Pablo Bautista\n          y\nLucas Gordillo', 30, 130); //nuestros nombres
    textSize(17);
    text('Obra original:\n Stephen Hillenburg', 450, 60);
    textSize(30);
    fill( 206, 75, 108 ); //rojo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcred, esquinaYcred, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Menu', tcrX, txY);
  }
  //bob le da regalo
  if (estado == "est1") {
    image( imagen[13], 0, 0, 640, 480 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10); //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    textSize(30);
    text(textos[1], 30, 370);
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //¿calamardo lo acepta?
  if (estado == "des1") {
    image( imagen[6], 0, 0, 640, 480);
    fill( 0, 113, 4 ); //verde
    stroke(216, 204, 250); //celeste
    text(textos[16], 270 , 370 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXno, esquinaYno, ancho, alto);
    rect( esquinaXsi, esquinaYsi, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Si', tsX, txY);
    text('No', tnX, txY);
  }
  //bob llora
  if (estado == "des1no") {
    image( imagen[16], 0, 0, 640, 480 );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    text(textos[2], 30 , 370 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //Calamardo se compadece
  if (estado == "des1noest1") {
    image( imagen[15], 0, 0, 640, 480 );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    text(textos[3], 30 , 370 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //Le devuelve el favor?
  if (estado == "des2") {
    image( imagen[14], 0, 0, 640, 480 );
    fill( 0, 113, 4 ); //verde
    stroke(216, 204, 250); //celeste
    text(textos[4], 190 , 370 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXno, esquinaYno, ancho, alto);
    rect( esquinaXsi, esquinaYsi, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Si', tsX, txY);
    text('No', tnX, txY);
  }
  //bob se desanima, a final 1
  if (estado == "des2no") {
    image( imagen[19], 0, 0, 640, 480 );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    text(textos[5], 30 , 370 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //final 1
  if (estado == "finalbueno") {
    image( imagen[4], 0, 0, 640, 480 );
    fill( 0, 113, 4 ); //verde
    stroke(216, 204, 250); //celeste
    text(textos[13], 260 , 370 );
    fill( 206, 75, 108 ); // rojo claro
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto); //boton de reinicio 1
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Creditos', tcX, txY);
  }
  //bob espera su regalo
  if (estado == "des1si") {
    image( imagen[12], 0, 0, 640, 480 );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    text(textos[6], 30 , 370 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //calamardo le busca un regalo
  if (estado == "des1siest1") {
    image( imagen[11], 0, 0, 640, 480 );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    text(textos[7], 30 , 370 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //calamardo le compra el pastel
  if (estado == "des2si") {
    image( imagen[10], 0, 0, 640, 480 );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    text(textos[8], 30 , 370 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //calamardo le advierte?
  if (estado == "des3") {
    image( imagen[18], 0, 0, 640, 480 );
    fill( 0, 113, 4 ); //verde
    stroke(216, 204, 250); //celeste
    text(textos[9], 250 , 370 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXno, esquinaYno, ancho, alto);
    rect( esquinaXsi, esquinaYsi, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Si', tsX, txY);
    text('No', tnX, txY);
  }
  //calamardo espera a que explote
  if (estado == "des3no") {
    image( imagen[5], 0, 0, 640, 480 );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    text(textos[10], 30 , 40 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //final malo
  if (estado == "finalmalo") {
    image( imagen[2], 0, 0, 640, 480 );
    fill( 0, 113, 4 ); //verde
    stroke(216, 204, 250); //celeste
    text(textos[14], 280, 370 );
    fill( 206, 75, 108 ); // rojo claro
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto); //boton de reinicio 2
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Creditos', tcX, txY);
  }
  //pasan el dia juntos
  if (estado == "des3si") {
    image( imagen[8], 0, 0, 640, 480 );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    text(textos[11], 30 , 40 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //bob tropieza con el pastel que nunca habia comido
  if (estado == "des3siest1") {
    image( imagen[7], 0, 0, 640, 480 );
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    text(textos[12], 30 , 40 );
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
  }
  //final canon
  if (estado == "finalcanon") {
    image( imagen[3], 0, 0, 640, 480 );
    fill( 0, 113, 4 ); //verde
    stroke(216, 204, 250); //celeste
    text(textos[15], 260 , 370 );
    fill( 206, 75, 108 ); // rojo claro
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto); //boton de reinicio 3
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Creditos', tcX, txY);
  }
  
    if(estado == "menu"){
    song.stop();
  }
 
}

function mousePressed() {
  if (estado == "menu" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "est1"; //menu a estado 1, Bob le da un regalo a calamardo
    song.play();
  }
  // creditos
  else if (estado == "menu" &&  mouseX > esquinaXcred && mouseX < esquinaXcred + ancho && mouseY > esquinaYcred && mouseY < esquinaYcred + alto) {
    estado = "creditos";
  }
  // vuelta a menu desde creditos
  else if (estado == "creditos" && mouseX > esquinaXcred && mouseX < esquinaXcred + ancho && mouseY > esquinaYcred && mouseY < esquinaYcred + alto) {
    estado = "menu";
  }
  // a decision 1, ¿calamardo lo recibe?
  else if (estado == "est1" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des1";
  }
  // calamardo no lo recibe
  else if (estado == "des1" && mouseX > esquinaXno && mouseX < esquinaXno + ancho && mouseY > esquinaYno && mouseY < esquinaYno + alto) {
    estado = "des1no";
  }
  // calamardo lo recibe
  else if (estado == "des1" && mouseX > esquinaXsi && mouseX < esquinaXsi + ancho && mouseY > esquinaYsi && mouseY < esquinaYsi + alto) {
    estado = "des1si";
  }
  // calamardo se compadece y lo acepta, a decision 2
  else if (estado == "des1no" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des1noest1";
  }
  // ¿Calamardo le devuelve el favor?
  else if (estado == "des1noest1" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des2";
  }
  // Bob se desanima
  else if (estado == "des2" && mouseX > esquinaXno && mouseX < esquinaXno + ancho && mouseY > esquinaYno && mouseY < esquinaYno + alto) {
    estado = "des2no";
  }
  // a final 1 bueno
  else if (estado == "des2no" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "finalbueno";
  }
  // final 1 bueno
  else if (estado == "finalbueno" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "creditos";
  }
  //calamardo le busca un regalo
  else if (estado == "des1si" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des1siest1";
  }
  //calamardo le compra el pastel
  else if (estado == "des1siest1" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des2si";
  }
  // calamardo le devuelve el favor
  else if (estado == "des2" && mouseX > esquinaXsi && mouseX < esquinaXsi + ancho && mouseY > esquinaYsi && mouseY < esquinaYsi + alto) {
    estado = "des2si";
  }
  // ¿calamardo le advierte?
  else if (estado == "des2si" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des3";
  }
  // No le advierte
  else if (estado == "des3" && mouseX > esquinaXno && mouseX < esquinaXno + ancho && mouseY > esquinaYno && mouseY < esquinaYno + alto) {
    estado = "des3no";
  }
  // Espera a que explote
  else if (estado == "des3no" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "finalmalo";
  }
  // final malo a creditos
  else if (estado == "finalmalo" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "creditos";
  }
  // si le advierte
  else if (estado == "des3" && mouseX > esquinaXsi && mouseX < esquinaXsi + ancho && mouseY > esquinaYsi && mouseY < esquinaYsi + alto) {
    estado = "des3si";
  }
  // pasan el dia juntos
  else if (estado == "des3si" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des3siest1";
  }
  // Bob tropieza y explotan
  else if (estado == "des3siest1" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "finalcanon";
  }
  // final canon a creditos
  else if (estado == "finalcanon" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "creditos";
  }
}
