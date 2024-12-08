let circles = [] // Array to store the 10 random circles
let mouseCircle // Object for the mouse-controlled circle
let numCircles = 10 // Number of random circles
let speedIncreaseRate = 1.001

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
    updateCircle(circle)
    drawCircle(circle) // Draw each random circle
  }

  // Mouse-controlled circle
  drawCircle(mouseCircle)
}

function createCircle(x, y, size, color, dx, dy) {
  return {
    x: x,
    y: y,
    r: size / 2,
    size: size,
    color: color,
    dx: dx,
    dy: dy
  }
}

// Function to draw a circle
function drawCircle(circle) {
  fill(circle.color)
  noStroke()
  ellipse(circle.x, circle.y, circle.size)
}

function updateCircle(circle) {
  // Moving Circles
  circle.x += circle.dx
  circle.y += circle.dy
  
  
  // Increasing Speed
  circle.dx *= speedIncreaseRate
  circle.dy *= speedIncreaseRate
  
  // Boundary Checking
  if (circle.x - circle.r < 0 || circle.x + circle.r > width) {
    circle.dx *= -1
  }
  
  if (circle.y - circle.r < 0 || circle.y + circle.r > height) {
    circle.dy *= -1
  }
  
  checkCollision(mouseCircle, circle)
}

function startCircles() {
  circles = []
  
  // Create 10 random circles
  for (let i = 0; i < numCircles; i++) {
    let randomX = random(50, width - 50) // width - 50 to prevent wall spawn
    let randomY = random(50, height - 50)
    let randomSize = random(20, 50)
    let randomColor = color(random(255), random(255), random(255))
    let randomDx = random(-2,2)
    let randomDy = random(-2,2)
    circles.push(createCircle(randomX, randomY, randomSize, randomColor, randomDx, randomDy)) 
  }

  mouseCircle = createCircle(mouseX, mouseY, 30, color(255, 0, 0))
}

function checkCollision(c1,c2) {
  let distance = dist(c1.x, c1.y, c2.x, c2.y)
  if (distance <= c1.r + c2.r) {
    noLoop()
    }
}

function keyPressed() {
  startCircles()
}
