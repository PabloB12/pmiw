//https://youtu.be/7UZsq6smr9U
let textos = [16];
let imagen = [18];
let estado;
let esquinaXcred = 20;
let esquinaYcred = 420;
let esquinaXcentro;
let esquinaYcentro;
let esquinaXno;
let esquinaYno;
let esquinaXsi;
let esquinaYsi;
let ancho;
let alto;
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
  
  song.setVolume(0.6);

  if (estado == "menu") {   //Pantalla de inicio
    image( imagen[1], 0, 0, 640, 480 );
    stroke(139, 10, 10);  //rojo oscuro
    fill( 232, 240, 27 );
    rect( 260, 420, 160, 40);
    fill( 206, 75, 108 );
    rect( esquinaXcred, esquinaYcred, 160, 40);
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
  if (estado == "creditos") {  //pantalla de créditos
    image( imagen[17], 0, 0, 640, 480 );
    stroke(216, 204, 250); //celeste
    fill( 73, 32, 198 ); //azul
    textSize(50);
    text('Hecho por:', 30, 60);
    textSize(30);
    fill( 0, 113, 4 ); //verde
    text('Pablo Bautista\n 121435/8\n          y\nLucas Gordillo\n 119050/3', 30, 130); //nuestros nombres
    textSize(17);
    text('OBRA ORIGINAL:\n Stephen Hillenburg\n nikelodeon', 450, 60);
    textSize(30);
    fill( 206, 75, 108 ); //rojo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcred, esquinaYcred, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Menu', tcrX, txY);
  }
  if (estado == "est1") {   //bob le da regalo
    image( imagen[13], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[1], 30, 370);
  }
  if (estado == "des1") {  //¿calamardo lo acepta?
    image( imagen[6], 0, 0, 640, 480);
    botonDoble(450, 193, 450, 130, 420, 390, 420, 160, 40);
    text(textos[16], 270 , 370 );
  }
  if (estado == "des1no") {  //bob llora
    image( imagen[16], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[2], 30 , 370 );
  }
  if (estado == "des1noest1") {  //Calamardo se compadece
    image( imagen[15], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[3], 30 , 370 );
  }
  if (estado == "des2") {  //Le devuelve el favor?
    image( imagen[14], 0, 0, 640, 480 );
    botonDoble(450, 193, 450, 130, 420, 390, 420, 160, 40);
    text(textos[4], 190 , 370 );
  }
  if (estado == "des2no") {  //bob se desanima, a final 1
    image( imagen[19], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[5], 30 , 370 );
  }
  if (estado == "finalbueno") {  //final 1
    image( imagen[4], 0, 0, 640, 480 );
    botonFinal(270, 450, 260, 420, 160, 40); //boton reinicio 1
    text(textos[13], 260 , 370 );
  }
  if (estado == "des1si") {  //bob espera su regalo
    image( imagen[12], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[6], 30 , 370 );
  }
  if (estado == "des1siest1") {  //calamardo le busca un regalo
    image( imagen[11], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[7], 30 , 370 );
  }
  if (estado == "des2si") {  //calamardo le compra el pastel
    image( imagen[10], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[8], 30 , 370 );
  }
  if (estado == "des3") {  //calamardo le advierte?
    image( imagen[18], 0, 0, 640, 480 );
    botonDoble(450, 193, 450, 130, 420, 390, 420, 160, 40);
    text(textos[9], 250 , 370 );
  }
  if (estado == "des3no") {  //calamardo espera a que explote
    image( imagen[5], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[10], 30 , 40 );
  }
  if (estado == "finalmalo") {  //final malo
    image( imagen[2], 0, 0, 640, 480 );
    botonFinal(270, 450, 260, 420, 160, 40); //boton reinicio 2
    text(textos[14], 280, 370 );
  }
  if (estado == "des3si") {  //pasan el dia juntos
    image( imagen[8], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[11], 30 , 40 );
  }
  if (estado == "des3siest1") {  //bob tropieza con el pastel que nunca habia comido
    image( imagen[7], 0, 0, 640, 480 );
    botonCentro(270, 450, 260, 420, 160, 40);
    text(textos[12], 30 , 40 );
  }
  if (estado == "finalcanon") {  //final canon
    image( imagen[3], 0, 0, 640, 480 );
    botonFinal(270, 450, 260, 420, 160, 40); //boton reinicio 3
    text(textos[15], 260 , 370 );
  }
  if(estado == "menu"){ //música se detiene al regresar al menú
    song.stop();
  }
 
}

function botonCentro(tcX, tcY, esquinaXcentro, esquinaYcentro, ancho, alto){
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Continuar', tcX, txY);
}

function botonDoble(tsX, tnX, txY, esquinaXno, esquinaYno, esquinaXsi, esquinaYsi, ancho, alto){
    stroke(216, 204, 250); //celeste
    fill( 232, 240, 27 ); //amarillo
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXno, esquinaYno, ancho, alto);
    rect( esquinaXsi, esquinaYsi, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Si', tsX, txY);
    text('No', tnX, txY);
    fill( 0, 113, 4 ); //verde
}

function botonFinal(tcX, tcY, esquinaXcentro, esquinaYcentro, ancho, alto){
    fill( 73, 32, 198 ); //azul
    stroke(216, 204, 250); //celeste
    fill( 206, 75, 108 ); // rojo claro
    stroke(139, 10, 10);  //rojo oscuro
    rect( esquinaXcentro, esquinaYcentro, ancho, alto);
    stroke(216, 204, 250); //celeste
    fill(191, 23, 174);
    text('Creditos', tcX, txY);
}

function mousePressed() {
  tcX = 270;
  txY = 450;
  esquinaXcentro = 260;
  esquinaYcentro = 420;
  tsX = 450;
  tnX = 193;
  txY = 450;
  esquinaXno = 130;
  esquinaYno = 420;
  esquinaXsi = 390;
  esquinaYsi = 420;
  ancho = 160;
  alto = 40;
  
  if (estado == "menu" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "est1"; //menu a estado 1, Bob le da un regalo a calamardo
    song.play();
  }
  else if (estado == "menu" &&  mouseX > esquinaXcred && mouseX < esquinaXcred + ancho && mouseY > esquinaYcred && mouseY < esquinaYcred + alto) {
    estado = "creditos";  // creditos
  }
  else if (estado == "creditos" && mouseX > esquinaXcred && mouseX < esquinaXcred + ancho && mouseY > esquinaYcred && mouseY < esquinaYcred + alto) {
    estado = "menu";  // vuelta a menu desde creditos
  }
  else if (estado == "est1" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des1";  // a decision 1, ¿calamardo lo recibe?
  }
  else if (estado == "des1" && mouseX > esquinaXno && mouseX < esquinaXno + ancho && mouseY > esquinaYno && mouseY < esquinaYno + alto) {
    estado = "des1no";  // calamardo no lo recibe
  }
  else if (estado == "des1" && mouseX > esquinaXsi && mouseX < esquinaXsi + ancho && mouseY > esquinaYsi && mouseY < esquinaYsi + alto) {
    estado = "des1si";  // calamardo lo recibe
  }
  else if (estado == "des1no" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des1noest1";  // calamardo se compadece y lo acepta, a decision 2
  }
  else if (estado == "des1noest1" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des2";  // ¿Calamardo le devuelve el favor?
  }
  else if (estado == "des2" && mouseX > esquinaXno && mouseX < esquinaXno + ancho && mouseY > esquinaYno && mouseY < esquinaYno + alto) {
    estado = "des2no";  // Bob se desanima
  }
  else if (estado == "des2no" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "finalbueno";  // a final 1 bueno
  }
  else if (estado == "finalbueno" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "creditos";  // final 1 bueno
  }
  else if (estado == "des1si" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des1siest1";  //calamardo le busca un regalo
  }
  else if (estado == "des1siest1" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des2si";  //calamardo le compra el pastel
  }
  else if (estado == "des2" && mouseX > esquinaXsi && mouseX < esquinaXsi + ancho && mouseY > esquinaYsi && mouseY < esquinaYsi + alto) {
    estado = "des2si";  // calamardo le devuelve el favor
  }
  else if (estado == "des2si" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des3";  // ¿calamardo le advierte?
  }
  else if (estado == "des3" && mouseX > esquinaXno && mouseX < esquinaXno + ancho && mouseY > esquinaYno && mouseY < esquinaYno + alto) {
    estado = "des3no";  // No le advierte
  }
  else if (estado == "des3no" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "finalmalo";  // Espera a que explote
  }
  else if (estado == "finalmalo" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "creditos";  // final malo a creditos
  }
  else if (estado == "des3" && mouseX > esquinaXsi && mouseX < esquinaXsi + ancho && mouseY > esquinaYsi && mouseY < esquinaYsi + alto) {
    estado = "des3si";  // si le advierte
  }
  else if (estado == "des3si" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "des3siest1";  // pasan el dia juntos
  }
  else if (estado == "des3siest1" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "finalcanon";  // Bob tropieza y explotan
  }
  else if (estado == "finalcanon" && mouseX > esquinaXcentro && mouseX < esquinaXcentro + ancho && mouseY > esquinaYcentro && mouseY < esquinaYcentro + alto) {
    estado = "creditos";  // final canon a creditos
  }
}
