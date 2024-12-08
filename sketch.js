let numCircles = 12 // Number of circles
let circles = []
let mouseCircle
// important: search for noloop code

function setup() {
  // Create canvas
  createCanvas(500, 500)
  
  // Function to start / restart the game
  restartGame()
}

function draw() {
  background(0);
  

}

function createCircle(size, color) {
  return {
    x: random(width),
    y: random(height),
    radius: radius,
    dx: random (-3,3),
    dy: random(-3,3),
    size: size,
    r: size/2,
    color: color
  }
}
