let circles = [] // Array to store the 10 random circles
let mouseCircle // Object for the mouse-controlled circle
let numCircles = 10 // Number of random circles

function setup() {
  createCanvas(400, 400)
  startCircles()
}

function draw() {
  background(0)

  // Mouse Circle Position
  mouseCircle.x = mouseX
  mouseCircle.y = mouseY

  // Circles
  for (let circle of circles) {
    drawCircle(circle) // Draw each random circle
  }

  // Mouse-controlled circle
  drawCircle(mouseCircle)
}

function createCircle(x, y, size, color) {
  return {
    x: x,
    y: y,
    r: size / 2,
    size: size,
    color: color
  }
}

// Function to draw a circle
function drawCircle(circle) {
  fill(circle.color)
  noStroke()
  ellipse(circle.x, circle.y, circle.size)
}

function startCircles() {
  circles = []
  
  // Create 10 random circles
  for (let i = 0; i < numCircles; i++) {
    let randomX = random(50, width - 50) // width - 50 to prevent wall spawn
    let randomY = random(50, height - 50)
    let randomSize = random(20, 50)
    let randomColor = color(random(255), random(255), random(255))
    circles.push(createCircle(randomX, randomY, randomSize, randomColor)) 
    
  }

  mouseCircle = createCircle(mouseX, mouseY, 30, color(255, 0, 0))
}
