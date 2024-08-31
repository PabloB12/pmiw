let img;
let imgX = 0;
let imgY = 0;
let diametro;
let esp;
let columnas = 7; // Número de columnas de círculos
let filas = 7; // Número de filas de círculos
let fondo; // Color de fondo
let circuloColor; // Color de los círculos
let colorOriginal; // Color original de los círculos

function preload() {
  img = loadImage('data/circulos.jpg'); // Carga la imagen dada
}

function setup() {
  createCanvas(800, 400);
  img.resize(400, 400); // Ajusta el tamaño de la imagen
  fondo = img.get(0, 0); // Toma el color del fondo de la imagen

  // Calcula el diámetro y el espacio entre los círculos para que entren perfectamente
  diametro = (height / filas) - 10; // Ajusta el diámetro de acuerdo a la altura disponible
  esp = (height / filas); // Ajusta el espacio entre los círculos

  circuloColor = color(0, 100, 0); // Color inicial de los círculos
  colorOriginal = circuloColor; // Guarda el color original de los círculos

  noFill(); // No rellena los círculos
  strokeWeight(2); // Ancho del borde de los círculos
}

function draw() {
  background(fondo); // Color de fondo igual al de la imagen
  image(img, imgX, imgY); // Dibuja la imagen en la parte izquierda

  // Dibuja los círculos en la parte derecha
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      // Calcula la posición de cada círculo
      let x = 400 + i * esp + esp / 2;
      let y = j * esp + esp / 2;
      
      // Establece el color de los círculos
      stroke(circuloColor); // Contorno de los círculos

      // Dibuja el círculo
      ellipse(x, y, diametro, diametro);
    }
  }
}

// Función que no retorna un valor y modifica una variable
function resetProgram() {
  diametro = (height / filas) - 10;
  circuloColor = colorOriginal; // Restaura el color original de los círculos
}

// Función que retorna un valor (nuevo tamaño del círculo)
function changeCircleSize(newSize) {
  return newSize;
}

function keyPressed() {
  if (keyCode === 32) { // Si se presiona la tecla de espacio
    circuloColor = color(random(255), random(255), random(255)); // Cambia a un color aleatorio
  }
  if (key === 'r' || key === 'R') {
    resetProgram();
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    diametro = changeCircleSize(diametro - 5); // Achica los círculos con el click izquierdo
  }
  if (mouseButton === RIGHT) { 
    diametro = changeCircleSize(diametro + 5); // Agranda los círculos de la derecha 
  }
}
